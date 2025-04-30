import React, { useState } from 'react'
import { Trash2 } from "lucide-react"
import type { ResponseData } from '../../../pages/User/Myprodcuts'
import axiosConfig from '../../../api/axiosConfig'
import { ColorChangingSpiner, Loading } from '../../common/Iconse'
import {v4 as uuid} from "uuid";
type product = {
    product: ResponseData
    token:string
    refetch: (value:any)=> void
}

const UserOwnProduct: React.FC<product> = ({ product,token,refetch }) => {
    const [isLoading, setIsLoading] = useState(false);

    const deletProducts = async (id: number, token: string) => {
        try {
            setIsLoading(true)
            const response = await axiosConfig.delete(`product/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            refetch(uuid());
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
        <Loading className='text-blue-700  w-3' />
            <div className=' relative'>
                {isLoading ? <ColorChangingSpiner className='text-blue-700 absolute right-0 top-0' /> : <Trash2 color="#a30000" className='absolute right-0 top-0' onClick={()=>{deletProducts(product.id,token)}} />}
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