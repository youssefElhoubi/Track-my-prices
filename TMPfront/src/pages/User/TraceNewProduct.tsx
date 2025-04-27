"use client"

import type React from "react"
import { useState } from "react"
import { Search, Link, Check } from "lucide-react"
import Navbar from "../../components/UserComponents/Nav"

const TraceNewProduct: React.FC = () => {
    const [url, setUrl] = useState("")
    const [isAnalyzed, setIsAnalyzed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleAnalyze = (e: React.FormEvent) => {
        e.preventDefault()
        if (!url) return

        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsAnalyzed(true)
            setIsLoading(false)
        }, 1000)
    }

    return (
        <>

            <Navbar />
            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden p-6 sm:p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Trace New Product</h1>
                        <p className="text-gray-600 mt-1">Paste the product URL from supported retailers</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label htmlFor="productUrl" className="block text-sm font-medium text-gray-700 mb-1">
                                Product URL
                            </label>
                            <div className="relative rounded-md">
                                <input
                                    type="url"
                                    id="productUrl"
                                    placeholder="https://www.amazon.com/..."
                                    className="block w-full pr-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <Link className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? "opacity-75 cursor-not-allowed" : ""
                                }`}
                            onClick={handleAnalyze}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            ) : (
                                <Search className="h-4 w-4 mr-2" />
                            )}
                            Analyze Product
                        </button>

                        {isAnalyzed && (
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
                                        <h4 className="text-sm font-medium text-gray-900">Wireless Noise Cancelling Headphones</h4>
                                        <div className="flex items-baseline">
                                            <span className="text-green-500 font-medium">$299.99</span>
                                            <span className="ml-1 text-xs text-gray-500">(Current Price)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TraceNewProduct
