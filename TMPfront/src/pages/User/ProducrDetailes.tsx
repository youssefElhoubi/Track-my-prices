import React, { useState, useEffect } from "react"
import { Search, User, Bookmark, Plus } from "lucide-react"
import Navbar from "../../components/UserComponents/Nav"
import Footer from "../../components/lanign components/Footer"
import { useParams } from "react-router-dom"
import { ProductInfo } from "../../api/getProductInfo"

type Root = {
    success: boolean
    message: string
    data: Data
    hestory: Hestory[]
    compairedProducts: any
} 

type Data ={
    id: number
    url: string
    name: string
    curentPrice: string
    platformName: string
    user_id: number
    created_at: string
    updated_at: string
    productImage: string
    hestory: Hestory[]
}

type Hestory ={
    id: number
    product_id: number
    CurrentPrice: string
    priceDiff: number
    created_at: string
    updated_at: string
}


const ProductDetailPage: React.FC = () => {
    const [alertThreshold, setAlertThreshold] = useState("")
    const [notifyOnDrop, setNotifyOnDrop] = useState(false)
    const [activeTab, setActiveTab] = useState("7D");
    const [productInfo, setProductInfo]= useState<Root>();
    const { id } = useParams();
    useEffect(() => {
        const getInfo = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                const response = await ProductInfo(id, token);
                setProductInfo(response?.data)
            }
        }
        getInfo();
    }, [])



    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col bg-white">
                {/* Header/Navigation */}
                {/* Main Content */}
                <main className="flex-grow">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className=" rounded-lg overflow-hidden">
                            <div className="p-6 flex justify-between">
                                {/* Product Header */}
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                                        <div className="flex flex-col md:flex-row md:items-center">
                                            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-md overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                                                <img
                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Po7CxlkSGrLZ3DJAZhOnnCwxZT1iLX.png"
                                                    alt="Wireless Noise-Canceling Headphones"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Wireless Noise-Canceling Headphones</h1>
                                        </div>

                                        <div className="mt-4 md:mt-0 text-right">
                                            <div className="text-2xl md:text-3xl font-bold text-green-600">$249.99</div>
                                            <div className="text-sm text-gray-600">
                                                Current Price · <span className="text-green-600">-15% from $294.99</span>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Price History */}
                                    <div className="mt-8">
                                        <h2 className="text-lg font-medium text-gray-900 mb-4">Price History</h2>
                                        <div className="flex space-x-2 mb-4">
                                            <button
                                                className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === "7D" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                                                    }`}
                                                onClick={() => setActiveTab("7D")}
                                            >
                                                7D
                                            </button>
                                            <button
                                                className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === "30D" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                                                    }`}
                                                onClick={() => setActiveTab("30D")}
                                            >
                                                30D
                                            </button>
                                            <button
                                                className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === "1Y" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                                                    }`}
                                                onClick={() => setActiveTab("1Y")}
                                            >
                                                1Y
                                            </button>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center text-gray-500 text-sm">
                                            Price chart will load here
                                        </div>
                                    </div>

                                    {/* Platform Comparison */}
                                    <div className="mt-8">
                                        <h2 className="text-lg font-medium text-gray-900 mb-4">Platform Comparison</h2>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between bg-green-50 rounded-lg p-3">
                                                <span className="font-medium">Amazon</span>
                                                <div className="text-right">
                                                    <div className="font-medium text-green-600">$249.99</div>
                                                    <div className="text-xs text-gray-500">In Stock</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                                <span className="font-medium">Best Buy</span>
                                                <div className="text-right">
                                                    <div className="font-medium">$279.99</div>
                                                    <div className="text-xs text-gray-500">+12% from Amazon</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                                <span className="font-medium">Walmart</span>
                                                <div className="text-right">
                                                    <div className="font-medium">$299.99</div>
                                                    <div className="text-xs text-gray-500">+20% from Amazon</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    {/* Left Column */}
                                    <div>
                                        {/* Add to Watchlist */}
                                        <button className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add to Watchlist
                                        </button>

                                        {/* Price Alert Settings */}
                                        <div className="mt-4">
                                            <div className="flex items-center mb-2">
                                                <input
                                                    id="notify-price-drop"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                    checked={notifyOnDrop}
                                                    onChange={() => setNotifyOnDrop(!notifyOnDrop)}
                                                />
                                                <label htmlFor="notify-price-drop" className="ml-2 block text-sm text-gray-700">
                                                    Notify me when price drops
                                                </label>
                                            </div>

                                            <div className="mt-2">
                                                <label htmlFor="price-threshold" className="block text-sm font-medium text-gray-700">
                                                    Price Alert Threshold
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="price-threshold"
                                                        id="price-threshold"
                                                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
                                                        placeholder="Enter target price"
                                                        value={alertThreshold}
                                                        onChange={(e) => setAlertThreshold(e.target.value)}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                    >
                                                        Set Alert
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Recent Changes */}
                                        <div className="mt-6">
                                            <h2 className="text-lg font-medium text-gray-900 mb-2">Recent Changes</h2>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">Today</span>
                                                    <span className="text-sm font-medium text-green-600">↓ $45 (15%)</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">1 week ago</span>
                                                    <span className="text-sm font-medium text-green-600">↓ $20 (7%)</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">2 weeks ago</span>
                                                    <span className="text-sm font-medium text-green-600">↓ $30 (10%)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column */}

                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default ProductDetailPage
