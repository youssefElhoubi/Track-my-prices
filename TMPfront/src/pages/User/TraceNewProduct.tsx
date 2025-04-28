import type React from "react";
import { useState, useEffect } from "react";
import { Search, Link } from "lucide-react";
import { } from "../../components/common/Iconse";
import Navbar from "../../components/UserComponents/Nav"
import ScrapedProductInof from "../../components/product/ScrapedProductInof"
import { useForm } from "react-hook-form";
import axiosConfig from "../../api/axiosConfig";
import ScrapedProductError from "../../components/product/ScrapedProductError";



const TraceNewProduct: React.FC = () => {
    type url = {
        url: string
    }
    type product = {
        productTitle: string
        holePrice: number
        productImage: string
        platformName: string
        url: string;
    };

    const [error, setError] = useState(false)
    const [Product, SetProduct] = useState<product>();
    const [token, setToken] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const localToken = localStorage.getItem("token");
        if (localToken) {
            setToken(localToken);
        }
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm<url>();

    const handleAnalyze = async (data: url) => {
        setError(false);
        setIsLoading(true)
        try {
            const response = await axiosConfig.post("product/scrap", data, {
                headers: {
                    Authorization: token
                }
            });
            let ProductInfo = response.data[0];
            ProductInfo.url = data.url;
            SetProduct(ProductInfo);
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setIsLoading(false);
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden p-6 sm:p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Trace New Product</h1>
                        <p className="text-gray-600 mt-1">Paste the product URL from supported retailers</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <form onClick={handleSubmit(handleAnalyze)} >
                                <label htmlFor="productUrl" className="block text-sm font-medium text-gray-700 mb-1">
                                    Product URL
                                </label>
                                <div className="relative rounded-md mb-2">
                                    <input
                                        type="url"
                                        id="productUrl"
                                        placeholder="https://www.amazon.com/..."
                                        {...register("url", {
                                            required: "URL is required",
                                            pattern: {
                                                value: /^(https?:\/\/)?([\w\d\-_]+\.+\S+)+/,
                                                message: "Please enter a valid URL",
                                            },
                                        })}
                                        className="block w-full pr-10 h-6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <Link className="h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                                {errors.url && (<span>{errors.url?.message}</span>)}

                                <button
                                    type="submit"
                                    className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? "opacity-75 cursor-not-allowed" : ""
                                        }`}
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
                                        <Search className="h-4 w-4 mr-2" />
                                    )}
                                    Analyze Product
                                </button>
                            </form>
                        </div>

                        {Product && (
                            <ScrapedProductInof title={Product.productTitle} image={Product.productImage} price={Product.holePrice} Platform={Product.platformName} url={Product.url} />
                        )}
                        {error && <ScrapedProductError message={""} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TraceNewProduct
