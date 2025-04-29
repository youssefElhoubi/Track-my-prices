import React from 'react'
import { Plus } from "lucide-react"

const RightSide:React.FC = () => {
    return (
        <>
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
        </>
    )
}

export default RightSide