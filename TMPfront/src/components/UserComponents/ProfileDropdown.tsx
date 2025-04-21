import type React from "react"
import { User, LogOut, Bookmark } from "lucide-react"

const ProfileDropdown: React.FC = () => {


    return (
        <div className="relative">
            {/* Dropdown menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-100">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <User className="h-4 w-4 mr-2 text-gray-500" />
                        View Profile
                    </a>

                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:hidden">
                        Home
                    </a>

                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:hidden">
                        My Products
                    </a>

                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 lg:hidden">
                        <Bookmark className="h-4 w-4 mr-2 text-gray-500" />
                        Watchlist
                    </a>

                    <a href="#" className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                    </a>
                </div>
        </div>
    )
}

export default ProfileDropdown
