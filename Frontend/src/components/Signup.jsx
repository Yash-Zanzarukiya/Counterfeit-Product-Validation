import { login } from "../app/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input, Button, Logo } from "./index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import backendService from "../backend/config.js";
import authService from "../backend/auth.js";

function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    let userData;
    try {
      await authService
        .createAccount({ ...data })
        .then((blob) => blob.json())
        .then((res) => {
          userData = res.success;
        });
      if (userData) {
        const response = await authService.getCurrentUser();
        const currentData = await response.json();
        if (currentData) {
          dispatch(login(currentData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className={`w-1/3 bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>

        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Owner Name: "
              required
              placeholder="Enter Owner Name"
              {...register("fullName", {
                required: "please enter owner name",
              })}
            />
            <Input
              label="Username: "
              required
              placeholder="Choose Your username"
              {...register("username", {
                required: "please enter the username",
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter Your email"
              type="email"
              required
              {...register("email", {
                required: "please enter the email",
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              required
              placeholder="Create New Password"
              {...register("password", {
                required: "please enter the password",
              })}
            />
            <Input
              label="Brand Name: "
              type="text"
              required
              placeholder="Enter Your Brand Name"
              {...register("brandName", {
                required: ["please enter your brand name!!!"],
              })}
            />
            <Input
              label="Licence Number: "
              type="text"
              required
              placeholder="Enter Your Brand's Licence Number"
              {...register("licenceNumber", {
                required: "please enter your brand's licence number!!!",
              })}
            />
            <Input
              label="Address: "
              type="text"
              required
              placeholder="Enter Your Brand's Address"
              {...register("address", {
                required: "please enter your brand's address!!!",
              })}
            />
            <Input
              label="Location: "
              type="text"
              required
              placeholder="Enter Your Brand's location"
              {...register("location", {
                required: "please enter your brand's location!!!",
              })}
            />
            <Input
              label="description: "
              type="text"
              required
              placeholder="Give Some Brief Description About Your Brand"
              {...register("description", {
                required: "please enter some description",
              })}
            />
            <Input
              label="website: "
              type="text"
              placeholder="Enter Your Brand's Official Website"
              {...register("website", { required: false })}
            />
            <Input
              label="Brand Logo :"
              type="file"
              className="mb-4"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              {...register("logo", { required: false })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
