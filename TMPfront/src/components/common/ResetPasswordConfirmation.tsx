import type React from "react"
import { Lock } from "lucide-react"
import BackToLoginNav from "./BackToLoginNav"

const ResetPasswordConfirmation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <BackToLoginNav/>
      <main className="flex justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="flex justify-center">
            <div className="h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center">
              <Lock className="h-6 w-6 text-white" />
            </div>
          </div>

          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Reset Your Password</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Enter your email to receive a password reset link</p>

          {/* Confirmation Message */}
          <div className="mt-8 bg-blue-50 rounded-lg shadow-sm p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Reset email sent!</h3>
            <p className="text-sm text-gray-600">
              Check your inbox for instructions. Didn't receive it?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Resend email
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ResetPasswordConfirmation
