import React, { useState, useEffect } from 'react';
import Navbar from '../../components/UserComponents/Nav';
import Footer from '../../components/lanign components/Footer';
import axiosConfig from '../../api/axiosConfig';
import UserOwnProduct from '../../components/product/product Detailes/UserOwnProduct';
import { LoadingSpiner } from '../../components/common/Iconse';
import QuickActions from '../../components/product/product Detailes/QuickActions';

export type ResponseData = {
    id: number;
    url: string;
    name: string;
    curentPrice: string;
    platformName: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    productImage?: string;
};

const ProductTracker: React.FC = () => {
    const [myProducts, setMyProducts] = useState<ResponseData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [Token, setToken] = useState("");
    const [refetchToken, setRefetchToken] = useState("");

    const getMyProducts = async () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                setToken(token);
                const response = await axiosConfig.get<{ success: boolean; message: string; data: ResponseData[] }>(
                    "product/own",
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                setMyProducts(response.data.data);
            }
        } catch (error) {
            console.error("Failed to fetch products", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getMyProducts();
    }, [refetchToken]);

    return (
        <>
            <Navbar />
            <div className="flex justify-between items-center my-8 mx-[10%] ">
                <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
                <a href='/user/product/add' className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <span className="mr-1">+</span> Add Product
                </a>
            </div>

            <div className="h-1/2 flex items-center justify-center p-4 ">
                <div className="bg-white rounded-lg shadow-lg w-full overflow-hidden">
                    <div className="p-6 flex justify-around">
                        <div className="w-1/2 shadow-lg px-5 rounded-3xl">
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-bold text-gray-900">Tracked Products</h2>
                                </div>

                                {isLoading ? (
                                    <LoadingSpiner />
                                ) : myProducts.length === 0 ? (
                                    <p>No products tracked.</p>
                                ) : (
                                    myProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="border border-gray-200 rounded-lg p-4 mb-4"
                                        >
                                            <UserOwnProduct product={product} token={Token} refetch={setRefetchToken} />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <QuickActions />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductTracker;
