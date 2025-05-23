import React from 'react'
import { ExclamationCircle } from '../common/Iconse'

const ProductExist: React.FC = () => {
    return (
        <div className="mt-6">
            <div className="border border-yellow-200 bg-yellow-50 rounded-md p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <ExclamationCircle className="h-7 w-7 text-yellow-500" />
                    </div>
                    <div className="ml-3 flex-1">
                        <h4 className="text-sm font-medium text-yellow-800">product was added successfully</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductExist