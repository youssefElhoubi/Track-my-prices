import { useState } from "react"
import { UserIcon, MailIcon, EyeIcon, EyeOffIcon, GoogleIcon, Thunder } from "../components/common/Iconse"
import { useForm } from "react-hook-form";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [ProfileImagePreview, setProfileImagePreview] = useState<string | null>("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    //  to handel later
    const handleImageChange = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            setProfileImage(file)
            const reader = new FileReader()
            console.log(reader.result);

            reader.onloadend = () => {
                setProfileImagePreview(reader.result);
            }
            reader.readAsDataURL(file)
        }
    }
    const submet = async (data: any) => {
        console.log(data);


    }


    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                            <UserIcon className="h-8 w-8 text-white" />
                        </div>
                    </div>

                    <h2 className="text-center text-2xl font-bold text-gray-900 mb-1">Join TMP</h2>
                    <p className="text-center text-gray-600 mb-6">Start tracking prices today</p>

                    <form className="space-y-6" onSubmit={handleSubmit(submet)}>
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="John Doe"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: { value: 5, message: "Minimum 5 characters required" },
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: "Only letters are allowed",
                                    },
                                })}

                                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        {errors.name && <span>{errors.name?.message}</span>}

                        <div>
                            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mb-1">
                                Profile Picture
                            </label>
                            <div
                                className="border-2 border-dashed border-gray-300 p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors w-[35%] h-32 flex items-center rounded-[50%]"
                                onClick={() => document.getElementById("profilePicture")?.click()}
                            >
                                {/* to be ahndeled later */}
                                {ProfileImagePreview ? (
                                    <div className="flex justify-center">
                                        <img
                                            src={ProfileImagePreview || "/placeholder.svg"}
                                            alt="Profile preview"
                                            className="h-24 w-24 rounded-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <p className="text-sm text-gray-500">Click to upload a photo</p>
                                )}
                                <input
                                    id="profilePicture"
                                    name="profilePicture"
                                    type="file"
                                    onChange={(e) => { handleImageChange(e) }}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="name@email.com"
                                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
                                    {...register("email", {
                                        required: "emial is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "this form is not acceptable"
                                        }
                                    })}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <MailIcon className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                            {errors.email && <span>{errors.email?.message}</span> }
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
                                        required: "passwored is required",
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
                                            message: "Password must be at least 8 characters long and include at least one letter, one number, and one special character."
                                        }
                                    })}
                                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                            {errors.password && <span>{errors.password?.message}</span> }

                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded "
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                                    I agree to the{" "}
                                    <a href="#" className="text-blue-600 hover:underline">
                                        terms
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-blue-600 hover:underline">
                                        privacy policy
                                    </a>
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                onClick={()=>{console.log(errors)}
                                }
                            >
                                Create Account
                                <span className="flex items-center pl-3">
                                    <Thunder className="h-5 w-5" />
                                </span>
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="button"
                                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                <GoogleIcon className="h-5 w-5 mr-2" />
                                Google
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm
