import { asyncHandler } from "../utils/asyncHandler.js";
import { APIError } from "../utils/APIError.js";
import { User } from "../models/user.model.js";
import { uploadPhotoOnCloudinary as uploadOnCloudinary } from "../utils/cloudinary.js";
import { APIResponse } from "../utils/APIResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const generateAccessAndRefreshToken = async (_id) => {
  try {
    const user = await User.findById(_id);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { refreshToken, accessToken };
  } catch (error) {
    throw new APIError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  let {
    username,
    password,
    fullName,
    email,
    brandName,
    licenceNumber,
    address,
    location,
    description,
    website,
  } = req.body;


  if (
    [
      username,
      password,
      fullName,
      email,
      brandName,
      licenceNumber,
      address,
      location,
      description,
    ].some((field) => field?.trim() === "")
  ) {
    throw new APIError(400, `all fields are required!!!`);
  }

  const userExist = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (userExist) {
    throw new APIError(400, "User Already Exists...");
  }

  let logo = "";
  if (req.file && req.file?.path) {
    let logoLocalPath = req.file?.path;
    logo = await uploadOnCloudinary(logoLocalPath);
    if (!logo)
      throw new APIError(
        500,
        "Internal Server Error!!! logo File Unable to Upload"
      );
    logo = logo.url;
  }

  // Create new user
  const createdUser = await User.create({
    username,
    password,
    fullName,
    email,
    brandName,
    licenceNumber,
    address,
    location,
    description,
    website,
    logo,
  });

  // checking if user is created successfully

  const userData = await User.findById(createdUser._id).select(
    "-password -refreshToken"
  );

  if (!userData) {
    throw new APIError(500, "Something went wrong while registering the user");
  }
  // Send back data to frontend
  return res
    .status(201)
    .json(new APIResponse(200, userData, "Account Created Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  let { email, password, username } = req.body;

  // validate
  if (!email && !username) {
    throw new APIError(400, "Username or Email is required");
  }

  // find User
  const user = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    throw new APIError(404, "User not Found");
  }

  const isCredentialValid = await user.isPasswordCorrect(password);

  if (!isCredentialValid) {
    throw new APIError(401, "Credential Invalid");
  }

  // generate and store tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // set tokens in cookie and send response
  const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new APIResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "LoggedIn Successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const cookieOptions = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new APIResponse(200, {}, "Logged out Successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new APIError(401, "unauthorized request");
  }

  try {
    const decodedRefreshToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedRefreshToken?._id);

    if (!user) {
      throw new APIError(401, "Invalid Refresh Token");
    }

    if (incomingRefreshToken !== user.refreshToken) {
      throw new APIError(401, "Refresh token is expired or used");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json(
        new APIResponse(
          200,
          { accessToken, newRefreshToken: refreshToken },
          "Access Token Granted Successfully"
        )
      );
  } catch (error) {
    throw new APIError(401, error?.message || "Invalid refresh token");
  }
});

const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  // Caution
  if (!oldPassword || !newPassword) {
    throw new APIError(400, "All Fields Required");
  }

  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new APIError(401, "Old Password is not Correct");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new APIResponse(200, {}, "Password Changed Successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new APIResponse(201, req.user, "User fetched Successfully"));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changePassword,
  getCurrentUser,
};
