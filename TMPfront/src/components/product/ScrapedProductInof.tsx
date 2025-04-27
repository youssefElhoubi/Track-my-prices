import React from 'react'
import { Check } from "lucide-react"

type props = {
    title: string;
    image: string;
    price: string;
    Platform: string;
    url: string;
}

const ScrapedProductInof: React.FC<props> = ({ title, image, price, Platform, url }) => {
    return (
        <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700">Scraped Product Details</h3>
                <button
                    type="button"
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    <Check className="h-4 w-4 mr-1" />
                    Confirm & Track
                </button>
            </div>

            <div className="border border-gray-200 rounded-md p-4 flex items-center">
                <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-md flex-shrink-0">
                    <img className="object-cover w-full h-full" src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{title}</h4>
                    <div className="flex items-baseline">
                        <span className="text-green-500 font-medium">${price}</span>
                        <span className="ml-1 text-xs text-gray-500">(Current Price)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrapedProductInof