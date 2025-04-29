import React from 'react'
import { Plus } from "lucide-react"
import AddToWatchList from './AddToWatchList'

const RightSide: React.FC = () => {
    return (
        <>
            <div>
                {/* Add to Watchlist */}
                <AddToWatchList />

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