import React, { useState, useEffect } from 'react';
import Navbar from '../../components/UserComponents/Nav';
import Footer from '../../components/lanign components/Footer';

const ProductTracker: React.FC = () => {
    const [MyProducts, setMyProducts] = useState();
    return (
        <>
            <Navbar />

            <div className="flex justify-between items-center my-8 mx-[10%] ">
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah!</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <span className="mr-1">+</span> Add Product
                </button>
            </div>

            <div className=" h-1/2 flex items-center justify-center p-4 ">
                <div className="bg-white rounded-lg shadow-lg w-full overflow-hidden">
                    <div className="p-6 flex justify-around">
                        <div className='w-1/2 shadow-lg px-5  rounded-3xl'>

                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-bold text-gray-900">Tracked Products</h2>
                                    <button className="text-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4 mb-4">
                                    <div className="flex justify-between mb-1">
                                        <div className="flex">
                                            <span className="text-gray-600 mr-2">Product</span>
                                        </div>
                                        <span className="font-bold text-gray-900">$249.99</span>
                                    </div>

                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium text-gray-900">Wireless Headphones</h3>
                                            <p className="text-sm text-gray-600">Amazon, Best Buy</p>
                                            <div className="flex items-center mt-1">
                                                <span className="text-green-500 text-sm font-medium">↑ 15%</span>
                                                <span className="text-gray-500 text-sm ml-2">• Last updated 2h ago</span>
                                            </div>
                                        </div>
                                        <a href="#" className="text-blue-600 text-sm">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Quick Actions */}
                        <div className='w-[25%]'>
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
                                    <div className="text-blue-600 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">Watchlist</span>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
                                    <div className="text-blue-600 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">Notifications</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductTracker;