import React, { useState } from "react"
import logo from "../../assets/TMPlogo.png"
import { Menu, X } from "lucide-react";
import { Search, Bookmark, User, DownArrow } from "../common/Iconse";
import ProfileDropdown from "./ProfileDropdown";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 shadow-lg py-2">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and brand */}
                    <a href="/user">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <div className="h-8 w-8 bg-teal-100 flex items-center justify-center mr-2 rounded-s overflow-hidden ">
                                    <img src={logo} alt="" />
                                </div>
                                <span className="font-bold text-gray-900 hidden sm:block">TrackMyPrices</span>
                            </div>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <nav className="flex space-x-4">
                            <a href="/user" className="text-gray-700 hover:text-blue-600">
                                Home
                            </a>
                            <a href="/wacthlist" className="text-gray-700 hover:text-blue-600">
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
                        <a href="/wacthlist" className="text-gray-700 hover:text-blue-600 hidden lg:flex items-center">
                            <Bookmark className="h-5 w-5 mr-1" />
                            <span>Watchlist</span>
                        </a>
                        <div className="flex items-center">
                            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                                <User className="h-5 w-5 text-white" />
                            </div>
                            <div className="ml-1 hidden md:block">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    <DownArrow />
                                </button>
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
                <div className="flex-1 max-w-md mx-4 md:hidden md:mx-auto">
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
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <ProfileDropdown />
                
            )}

        </>
    )
}

export default Navbar
