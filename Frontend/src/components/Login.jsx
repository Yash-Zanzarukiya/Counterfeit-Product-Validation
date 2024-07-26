import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login as authLogin } from "../app/authSlice";
import { Input, Button, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../backend/auth";
import { useForm } from "react-hook-form";
import loginImage from "../assets/Img/logins.png";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setError("");
    setLoading(true);
    let userData1;

    try {
      await authService
        .login({ ...data })
        .then((blob) => blob.json())
        .then((res) => {
          userData1 = res.data?.user;
        })
        .catch((err) => console.log("err: ", err));

      if (userData1) {
        dispatch(authLogin(userData1));
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center h-[100vh] pt-10  bg-black/60">
      <div className="flex justify-center w-[100vw] h-[600px]">
        <div className="w-full md:w-1/2 h-full">
          <div className="flex flex-wrap  h-full">
            <div className="w-full  h-full ">
              <div className="relative w-full h-full flex bg-gray-200">
                <div className="w-[45%] flex items-center justify-center   bg-gradient-to-r from-[#5f78d4] to-[#3657cd]">
                  <img src={loginImage} alt="img" />
                </div>
                <div className="relative w-[55%] py-12 px-8 md:px-12 lg:px-16">
                  <h1 className="flex justify-center items-center align-middle mb-8 text-3xl">
                    <Logo size="40" /> <span className=" mt-2 text-4xl ml-2">C.P.V.</span>
                  </h1>

                  <h3 className="text-4xl font-bold mb-4">Sign In</h3>

                  {error && <p className={`text-red-600 text-center`}>{error}</p>}

                  <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5 text-lg">
                      <Input
                        label="Email "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                          required: true,
                          validate: {
                            matchPatern: (value) =>
                              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                              "Email address must be a valid address",
                          },
                        })}
                      />
                      <Input
                        label="Password "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                          required: true,
                        })}
                      />

                      <div>
                        <button
                          type="submit"
                          className="btn w-full my-2 py-2 rounded relative inline-flex items-center justify-start overflow-hidden transition-all duration-[300ms] bg-[#F9C747] tracking-wide group"
                        >
                          <span className="w-0 h-0 rounded-3xl bg-[#00172F] absolute -bottom-5 -left-5 ease-out duration-[400ms] transition-all group-hover:w-96 group-hover:h-64 -z-1"></span>
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
                              "Sign in"
                            )}
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="mt-4 text-center text-base text-black/60">
                    Don&apos;t Registered yet? &nbsp;
                    <Link
                      to="/signup"
                      className="font-medium text-primary transition-all duration-200 hover:underline text-blue-500 hover:text-[#00172F]"
                    >
                      Signup now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div
          className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
          <div className="mb-2 flex justify-center">
            <span className="inline-block max-w-[100px]">
              <Logo width="100%" />
            </span>
          </div>

          <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>

          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>

          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

          <form onSubmit={handleSubmit(login)} className="mt-8">
            <div className="space-y-5">
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
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
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
              />
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
