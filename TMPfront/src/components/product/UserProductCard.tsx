import React, { useState, useEffect } from "react"

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


const UserProductCard: React.FC<product> = ({ id, url, name, productImage, curentPrice, platformName, user_id, created_at, updated_at, hestory }) => {

    const [isDown, setisDown] = useState<boolean>(false);
    const [diff, setDiff] = useState(hestory?.at(-1).priceDiff);

    useEffect(() => {
        if (diff <= 0) {
            // console.log("hfjksdhfkjsdhfkj");
            setisDown(true);
        }
    }, []);


    return (
        <a href={`/user/product/${id}`}>
            <div className="md:w-80 rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
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
                        <p className="text-gray-500 text-sm">{platformName}</p>
                        <div className="flex items-center justify-between">
                            <span className={` font-medium text-xl ${isDown ? "text-green-500" : "text-red-500"}`}>${curentPrice}</span>
                            <span className={` ${isDown ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} text-xs px-2 py-1 rounded-full flex items-center`}>↓ {diff}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default UserProductCard
