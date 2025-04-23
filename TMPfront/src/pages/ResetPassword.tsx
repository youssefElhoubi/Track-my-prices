import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";
import BackToLoginNav from "../components/common/BackToLoginNav";
import { useForm } from "react-hook-form";
import axiosConfig from "../api/axiosConfig";
import { Loading } from "../components/common/Iconse";
import ResetPasswordConfirmation from "../components/common/ResetPasswordConfirmation";

type data = {
  email: string
}

const ResetPassword: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<data>();
  const [loading, setloading] = useState(false);
  const [submited, setsubmited] = useState(false);

  const submitData = async (data: data) => {
    try {
      setloading(true)
      const response = await axiosConfig.post("/auth/passwored/forget", data);
      console.log(response);
      setloading(false)
      setsubmited(true);
    } catch (error) {
      console.log(error);
      setloading(false)
    }
  }


  return (<>
    {!submited ? (
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
              <p className="mt-2 text-center text-sm text-gray-600">Enter your email to receive a password reset link</p>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit(submitData)}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "this form is not acceptable"
                        }
                      })}
                      type="email"
                      placeholder="name@email.com"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  {errors.email && <span>{errors.email?.message}</span>}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {loading ? (
                      <Loading className="ml-2 h-4 w-4" />
                    ) : (
                      <>
                        Send Reset Link

                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    ) : (
      <ResetPasswordConfirmation />
    )}

  </>
  )
}

export default ResetPassword
