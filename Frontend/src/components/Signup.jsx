import { login } from "../app/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input, Button, Logo } from "./index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import appwriteService from "../appwrite/config.js";
import authService from "../appwrite/auth.js";

function Signup() {
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();

	const create = async (data) => {
		setError("");
		console.log("Inside create account call...");
		// console.log(data)
		let userData;
		try {
			await authService
				.createAccount({ ...data })
				.then((blob) => blob.json())
				.then((res) => {
					userData = res.success;
					console.log(userData)
				});
			console.log(userData);
			if (userData) {
				const response  = await authService.getCurrentUser();
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
		<div className="flex items-center justify-center">
			{console.log("Inside Signup Component")}
			<div
				className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
			>
				<div className="mb-2 flex justify-center">
					<span className="inline-block">
						<Logo width="100%" />
					</span>
				</div>

				<h2 className="text-center text-2xl font-bold leading-tight">
					Sign up to create account
				</h2>

				<p className="mt-2 text-center text-base text-black/60">
					Already have an account?&nbsp;
					<Link
						to="/login"
						className="font-medium text-primary transition-all duration-200 hover:underline"
					>
						Sign In
					</Link>
				</p>

				{error && (
					<p className="text-red-600 mt-8 text-center">{error}</p>
				)}

				<form onSubmit={handleSubmit(create)}>
					<div className="space-y-5">
						<Input
							label="Full Name: "
							placeholder="Enter your full name"
							{...register("fullName", {
								required: true,
							})}
						/>
						<Input
							label="Username: "
							placeholder="Enter your username"
							{...register("username", {
								required: true,
							})}
						/>
						<Input
							label="Email: "
							placeholder="Enter your email"
							type="email"
							{...register("email", {
								required: true,
								validate: {
									matchPatern: (value) =>
										/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
											value,
										) ||
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
							Create Account
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
