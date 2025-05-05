import { TrashIcon } from "lucide-react"
import React from "react"
import { deletProduct } from "../../api/adminActions"

type product = {
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

type Hestory = {
    id: number
    product_id: number
    CurrentPrice: string
    priceDiff: number
    created_at: string
    updated_at: string
}


const AdminProductCard: React.FC<product> = ({ id, name, productImage, platformName}) => {


    return (
        <div className="md:w-72 rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 relative">
                <div className="bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <img
                        src={productImage}
                        alt="Wireless Headphones"
                        className="h-48 object-contain"
                    />
                </div>
                <div className="space-y-2">
                    <h3 className="font-medium text-lg text-gray-900">{name}</h3>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm">{platformName}</p>
                        <div className="flex">
                            <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="userimg" className="w-5" />
                            <TrashIcon className="text-red-400" onClick={() => { deletProduct(id) }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProductCard
