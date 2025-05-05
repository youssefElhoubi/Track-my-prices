import { Mail, MoreHorizontal, UserCheck, UserX } from "lucide-react"
import { useState } from "react"

interface UserCardProps {
    user: {
        id: string
        name: string
        email: string
        role: string
        status: "active" | "inactive"
        avatarUrl?: string
        joinDate: string
    }
}

const UserCard = async ({ user }: UserCardProps) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
            {/* Left section - Avatar and basic info */}
            <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    {user.avatarUrl ? (
                        <img
                            src={user.avatarUrl || "/placeholder.svg"}
                            alt={`${user.name}'s avatar`}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-lg">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>

                <div className="ml-4">
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                        <span>{user.email}</span>
                    </div>
                </div>
            </div>

            {/* Middle section - Role and status */}
            <div className="hidden md:flex flex-col items-start">
                <div className="text-sm font-medium">{user.role}</div>
                <div className="flex items-center mt-1">
                    <span
                        className={`inline-block h-2 w-2 rounded-full mr-2 ${user.status === "active" ? "bg-green-500" : "bg-gray-300"
                            }`}
                    ></span>
                    <span className="text-xs text-gray-500 capitalize">{user.status}</span>
                </div>
            </div>

            {/* Right section - Join date and actions */}
            <div className="flex items-center">
                <div className="hidden md:block text-right mr-6">
                    <div className="text-xs text-gray-500">Joined</div>
                    <div className="text-sm">{user.joinDate}</div>
                </div>

                <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full" title="Send message">
                        <Mail size={18} />
                    </button>

                    {user.status === "active" ? (
                        <button
                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full"
                            title="Deactivate user"
                        >
                            <UserX size={18} />
                        </button>
                    ) : (
                        <button
                            className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full"
                            title="Activate user"
                        >
                            <UserCheck size={18} />
                        </button>
                    )}

                    <div className="relative">
                        <button
                            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
                            onClick={toggleDropdown}
                            title="More options"
                        >
                            <MoreHorizontal size={18} />
                        </button>

                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        View Profile
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Edit User
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                        Delete User
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserCard
