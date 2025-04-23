"use client"

import type React from "react"
import { useState } from "react"
import { Lock, Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form";
import BackToLoginNav from "../components/common/BackToLoginNav";

type data = {
    password: string,
    confirmPassword: string
}

const NewPasswordReset: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");


    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <BackToLoginNav />

            {/* Main Content */}
            <main className="flex justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-8 sm:p-10">
                        <div className="flex justify-center">
                            <div className="h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center">
                                <Lock className="h-6 w-6 text-white" />
                            </div>
                        </div>

                        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Reset Your Password</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">Create a new password for your account</p>

                        <form className="mt-8 space-y-6" onSubmit={handleSubmit(() => { })}>
                            {/* New Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    New Password
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        id="password"
                                        {...register("password", {
                                            required: "passwored is required",
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
                                                message: "Password must be at least 8 characters long and include at least one letter, one number, and one special character."
                                            }
                                        })}
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && <span>{errors.password?.message}</span>}
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        {...register("confirmPassword",{
                                            required:"password is required" ,
                                            validate:(value)=> value === password || "passwords not matching"
                                        })}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400" />
                                        )}
                                    </button>
                                    {errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>}
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NewPasswordReset
