import type React from "react"
import { useState } from "react"
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, ShoppingBagIcon, ArrowRightIcon, Loading } from "../components/common/Iconse";
import { useForm } from "react-hook-form";
import axiosConfig from "../api/axiosConfig";
import decode from "../actions/decode";
import { useNavigate } from "react-router-dom";
import BackToLoginNav from "../components/common/BackToLoginNav";

type LoginForm = {
    email: string;
    password: string
};

const LoginPage: React.FC = () => {
    const navigator = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm<LoginForm>();

    const [showPassword, setShowPassword] = useState(false)
    const [loading, setloading] = useState(false)


    const submet = async (info: LoginForm) => {
        try {
            setloading(true);
            const response = await axiosConfig.post("/auth/signin", info);
            if (response.status == 201) {
                const token = response.data.token;
                localStorage.setItem("token", token);
                const payload = await decode(token);
                const role = payload.data.role;
                console.log(role);
                if (role == "user") {
                    navigator("/user");
                } else if (role == "admine") {
                    navigator("/admin");
                }
            }
            setloading(false);
        } catch (error) {
            setloading(false);
            console.log(`ther is an error \n ${error}`);
        }
    }

    return (
        <>
            <BackToLoginNav />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                    <div className="flex flex-col items-center mb-8">
                        <div className="bg-blue-500 rounded-full p-4 mb-4">
                            <ShoppingBagIcon className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">Welcome Back </h1>
                        <p className="text-gray-500 text-sm">Track prices and save money</p>
                    </div>

                    <form onSubmit={handleSubmit(submet)}>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="name@email.com"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "this form is not acceptable"
                                            }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                                {errors.email && <span>{errors.email?.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        {...register("password", {
                                            // pattern: {
                                            //     value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
                                            //     message: "Password must be at least 8 characters long and include at least one letter, one number, and one special character."
                                            // }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    {errors.password && <span>{errors.password?.message}</span>}
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                                    >
                                        {showPassword ? (
                                            <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5 text-gray-400" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                {loading ? (
                                    <Loading className="ml-2 h-4 w-4" />
                                ) : (
                                    <>
                                        Sign In
                                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="button"
                                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Google
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-center text-sm">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <a href="/signup" className="text-blue-500 hover:text-blue-600 font-medium">
                                Sign up now
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage;
