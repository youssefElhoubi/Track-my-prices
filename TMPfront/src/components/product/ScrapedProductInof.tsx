import React, { useState, useEffect } from 'react'
import { Check } from "lucide-react"
import axiosConfig from '../../api/axiosConfig';
import ProductAdded from './productAdded';
import ProductExist from './ProductExist';

type props = {
    title: string;
    image: string;
    price: string | number;
    Platform: string;
    url: string;
}



const ScrapedProductInof: React.FC<props> = ({ title, image, price, Platform, url }) => {
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [productAdded, setProductAdded] = useState(false);
    const [productexist, setProductsExist] = useState(false);
    useEffect(() => {
        const localToken = localStorage.getItem("token");
        if (localToken) {
            setToken(localToken);
        }
    }, []);
    const saveProduct = async ({ title, image, price, Platform, url }: props) => {
        setIsLoading(true)
        try {
            const data = {
                productTitle: title,
                productPrice: price,
                productImage: image,
                productPlatform: Platform,
                url
            }
            console.log(data);
            
            const response = await axiosConfig.post("product/add", data, {
                headers: {
                    Authorization: token
                }
            });
            console.log(response);

            if (response.data.success) {
                setProductAdded(true);
                setProductsExist(false);
            } else if (response.status == 208) {
                setProductAdded(false);
                setProductsExist(true);
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }
    return (
        <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700">Scraped Product Details</h3>
                <button
                    onClick={() => { saveProduct({ title, image, price, Platform, url }) }}
                    type="button"
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    ) : (
                        <Check className="h-4 w-4 mr-2" />
                    )}
                    Confirm & Track
                </button>
            </div>

            <div className="border border-gray-200 rounded-md p-4 flex items-center">
                <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-md flex-shrink-0">
                    <img className="object-cover w-full h-full" src={image} alt="" />
                </div>
                <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{title}</h4>
                    <div className="flex items-baseline">
                        <span className="text-green-500 font-medium">${price}</span>
                        <span className="ml-1 text-xs text-gray-500">(Current Price)</span>
                    </div>
                </div>
            </div>
            {
                productAdded && <ProductAdded />
            }
            {
                productexist&& <ProductExist/>
            }
        </div>
    )
}

export default ScrapedProductInof