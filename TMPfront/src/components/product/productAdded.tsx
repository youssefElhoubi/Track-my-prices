import React from 'react'
import { AlertCircle } from "lucide-react"
import { CheckMark } from '../common/Iconse'

const ProductAdded: React.FC = () => {
    return (
        <div className="mt-6">

            <div className="border border-green-200 bg-green-50 rounded-md p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <CheckMark className="h-7 w-7 text-green-500" />
                    </div>
                    <div className="ml-3 flex-1">
                        <h4 className="text-sm font-medium text-green-800">product was added successfully</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAdded