import React from 'react'
import logo from "../../assets/TMPlogo.png";

const BackToLoginNav: React.FC = () => {
    return (
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
    )
}

export default BackToLoginNav