import React from 'react'
import { Trash2 } from "lucide-react"
import type { ResponseData } from '../../../pages/User/Myprodcuts'
type product = {
    product: ResponseData
}

const UserOwnProduct: React.FC<product> = ({ product }) => {
    return (
        <>
            <div className=' relative'>
                <Trash2 color="#a30000" className='absolute right-0 top-0' />
                <div className="flex justify-between mb-1 w-[15%] ">
                    <img src={product.productImage} alt="" />
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.platformName}</p>
                        <div className="flex items-center mt-1">
                            <span className="text-green-500 text-sm font-medium">
                                ↑ 15%
                            </span>
                            <span className="text-gray-500 text-sm ml-2">
                                • Last updated: {new Date(product.updated_at).toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm"
                    >
                        View Details
                    </a>
                </div>
            </div>
        </>
    )
}

export default UserOwnProduct