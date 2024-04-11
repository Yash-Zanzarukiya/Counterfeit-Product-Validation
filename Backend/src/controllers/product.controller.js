import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";
import { uploadPhotoOnCloudinary } from "../utils/cloudinary.js";

const addAProduct = asyncHandler(async (req, res) => {
  const {
    product_name,
    product_id,
    slug,
    description,
    manufacturingDate,
    expiryDate,
    MRP,
  } = req.body;

  const brand = req.user?._id;

  if (!product_id && !product_name && !brand && !slug) {
    throw new APIError(400, "All fields required");
  }

  const photoLocalPath = req.file?.path;

  let productImage = "";
  if (photoLocalPath) {
    let photo = await uploadPhotoOnCloudinary(photoLocalPath);
    if (!photo) throw new APIError(500, "Error Accured While uploading File");
    productImage = photo.url;
  }

  const product = await Product.create({
    product_name,
    brand,
    product_id,
    slug,
    productImage,
    description,
    manufacturingDate,
    expiryDate,
    MRP,
  });

  if (!product) {
    throw new APIError(500, "Error while adding Product");
  }

  return res
    .status(200)
    .json(new APIResponse(200, product, "Product Added successfully"));
});

const getProduct = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    throw new APIError(400, "Slug not found");
  }

  const product = await Product.find({ slug });

  if (!product) throw new APIError(400, "No product found");

  // TODO : Call Smart contract Function

  const isGenuine = true;

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        { ...product, isGenuine },
        "Product Sent Successfully"
      )
    );
});

const getAllProducts = asyncHandler(async (req, res) => {
  //TODO: find only logged in Brand's product after Indiviadual login.

  const products = await Product.find({});

  if (!products) throw new APIError(400, "No Product found");

  return res
    .status(200)
    .json(new APIResponse(200, products, "All Product Sent Successfully"));
});

export { getAllProducts, addAProduct, getProduct };
