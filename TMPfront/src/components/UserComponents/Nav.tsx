import React ,{ useState } from "react"
import logo from "../../assets/TMPlogo.png"
import { Search, User, Bookmark, Menu, X } from "lucide-react"

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="border-b border-blue-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and brand */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <div className="h-8 w-8 bg-teal-100 flex items-center justify-center mr-2 rounded-s overflow-hidden ">
                                <img src={logo} alt="" />
                            </div>
                            <span className="font-bold text-gray-900 hidden sm:block">TrackMyPrices</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <nav className="flex space-x-4">
                            <a href="#" className="text-gray-700 hover:text-blue-600">
                                Home
                            </a>
                            <a href="#" className="text-gray-700 hover:text-blue-600">
                                My Products
                            </a>
                        </nav>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md mx-4 hidden sm:block">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-gray-700 hover:text-blue-600 hidden lg:flex items-center">
                            <Bookmark className="h-5 w-5 mr-1" />
                            <span>Watchlist</span>
                        </a>
                        <div className="flex items-center">
                            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                                <User className="h-5 w-5 text-white" />
                            </div>
                            <div className="ml-1 hidden md:block">
                                <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden bg-white p-1 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        >
                            My Products
                        </a>
                        <a
                            href="#"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        >
                            Watchlist
                        </a>
                        <div className="relative mt-3">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
