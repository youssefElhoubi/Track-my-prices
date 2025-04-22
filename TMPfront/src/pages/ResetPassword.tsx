import type React from "react";
import { Lock, Mail } from "lucide-react";
import logo from "../assets/TMPlogo.png";

const ResetPassword: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-teal-100 rounded-xl flex items-center justify-center mr-2 overflow-hidden">
                <img src={logo} alt="Platform logo" />
              </div>
              <span className="font-bold text-gray-900">TrackMyPrices</span>
            </div>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Back to Login
            </a>
          </div>
        </div>
      </header>

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

            <form className="mt-8 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@email.com"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Reset Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ResetPassword
