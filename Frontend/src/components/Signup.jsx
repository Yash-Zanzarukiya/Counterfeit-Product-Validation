import { login } from "../app/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input, Button, Logo } from "./index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../backend/auth.js";

function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const create = async (data) => {
    setError("");
    setLoading(true);
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
    } finally {
      setLoading(true);
    }
  };

  return (
    <div className=" bg-blue h-fit px-16 w-[90%] mt-10">
      <div className="flex flex-wrap mt-4">
        <div className="w-full">
          <div className="text-center mb-4">
            <h4 className="text-4xl text-white font-bold">Register Your Brand</h4>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit(create)}>
          <div className="flex flex-wrap -mx-4 ">
            <div className="w-full lg:w-1/2 px">
              <div className="bg-white shadow rounded p-4">
                <h5 className="text-lg font-bold bg-[#F9C747] p-2 rounded pl-4  mt-0 mb-3 uppercase">
                  General
                </h5>
                <div className="mb-3">
                  <Input
                    label="Brand Name "
                    type="text"
                    required
                    placeholder="Enter Your Brand Name"
                    {...register("brandName", {
                      required: ["please enter your brand name!!!"],
                    })}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    label="Owner Name "
                    required
                    placeholder="Enter Owner Name"
                    {...register("fullName", {
                      required: "please enter owner name",
                    })}
                  />
                </div>

                <div className="mb-3">
                  <Input
                    label="License Number "
                    type="text"
                    required
                    placeholder="Enter Your Brand's Licence Number"
                    {...register("licenceNumber", {
                      required: "please enter your brand's licence number!!!",
                    })}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    label="Address "
                    type="text"
                    required
                    placeholder="Enter Your Brand's Address"
                    {...register("address", {
                      required: "please enter your brand's address!!!",
                    })}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    label="description "
                    type="text"
                    required
                    placeholder="Give Some Brief Description About Your Brand for Review"
                    {...register("description", {
                      required: "please enter some description",
                    })}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    label="Location"
                    type="text"
                    required
                    placeholder="Enter Your Brand's location"
                    {...register("location", {
                      required: "please enter your brand's location!!!",
                    })}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    label="website"
                    type="text"
                    placeholder="Enter Your Brand's Official Website"
                    {...register("website", { required: false })}
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white shadow rounded p-4">
                <h5 className="text-lg font-bold bg-[#F9C747] p-2 rounded pl-4 mt-0 mb-3 uppercase">
                  Brand Logo
                </h5>
                <div className="mb-3">
                  <Input
                    label="Brand's Official Logo"
                    type="file"
                    className="mb-4"
                    required
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("logo", { required: false })}
                  />
                </div>
              </div>

              <div className="bg-white shadow rounded p-4 mt-4">
                <h5 className="text-lg font-bold bg-[#F9C747] p-2 rounded pl-4  mt-0 mb-3 uppercase">
                  Credentials Data
                </h5>
                <div className="mb-3">
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
                </div>
                <div className="mb-3">
                  <Input
                    label="Username "
                    required
                    placeholder="Choose Your username"
                    {...register("username", {
                      required: "please enter the username",
                    })}
                  />
                </div>

                <div className="mb-3">
                  <Input
                    label="Password "
                    type="password"
                    required
                    placeholder="Create New Password"
                    {...register("password", {
                      required: "please enter the password",
                    })}
                  />
                </div>

                <div className="mb-3">
                  <Input
                    label="Confirm Password "
                    type="password"
                    required
                    placeholder="Re-Enter New Password"
                    {...register("password", {
                      required: "please enter the password",
                    })}
                  />
                </div>
              </div>
              {error && (
                <p className="text-red-600 mt-4 text-center py-[2px] rounded bg-white w-full transition-all duration-150">
                  {error}!!!
                </p>
              )}
            </div>
          </div>

          <div className="w-full px-4 text-center mt-4">
            <button
              type="button"
              className="btn px-5 my-2 mx-5 py-2 rounded relative inline-flex items-center justify-start overflow-hidden transition-all duration-[500ms] bg-[#F9C747] tracking-wide group"
            >
              <span className="w-0 h-0 rounded-3xl bg-[#e63434] absolute -bottom-5 -left-5 ease-out duration-[400ms] transition-all group-hover:w-36 group-hover:h-36 -z-1"></span>
              <span className="w-full text-lg flex items-center justify-center text-black transition-colors duration-[350ms] ease-in-out group-hover:text-white z-20">
                Cancel
              </span>
            </button>
            <button
              type="submit"
              className="btn px-5 my-2 py-2 rounded relative inline-flex items-center justify-start overflow-hidden transition-all duration-[500ms] bg-[#F9C747] tracking-wide group"
            >
              <span
                className={`w-0 h-0 rounded-3xl bg-[#62dc29] absolute -bottom-5 -left-5 ease-out duration-[400ms] transition-all ${
                  loading ? "group-hover:w-64" : "group-hover:w-36"
                } group-hover:h-36 -z-1`}
              ></span>
              <span className="w-full text-lg flex items-center justify-center text-black transition-colors duration-[350ms] ease-in-out group-hover:text-white z-20">
                {loading ? (
                  <>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="mr-2 inline-block h-5 w-5 animate-spin text-blue-500"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#FFF"
                      ></path>
                    </svg>
                    Please wait...
                  </>
                ) : (
                  "Register"
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );

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
