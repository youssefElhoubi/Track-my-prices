import React, { useState, useEffect } from "react"
import Navbar from "../../components/UserComponents/Nav"
import Footer from "../../components/lanign components/Footer"
import { useParams } from "react-router-dom"
import { ProductInfo } from "../../api/getProductInfo"
import ProductCurrentInfo from "../../components/product/product Detailes/ProductCurrentInfo"
import PriceChart from "../../components/product/product Detailes/PriceChart"
import RightSide from "../../components/product/product Detailes/RightSide"
import { LoadingSpiner } from "../../components/common/Iconse"
import ProcutCompair from "../../components/product/product Detailes/ProcutCompair"

type Root = {
    success: boolean
    message: string
    data: Data
    hestory: Hestory[]
    compairedProducts: any
}

type Data = {
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


const ProductDetailPage: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [comp, setComp] = useState<any>();

    const [productInfo, setProductInfo] = useState<Root>({
        success: true,
        message: "Product retrieved successfully.",
        data: {
            id: 1,
            url: "https://www.amazon.com/ASUS-Display-NVIDIA%C2%AE-i7-13650HX-G614JV-AS74/dp/B0CRDCXRK2/ref=sr_1_1?_encoding=UTF8&sr=8-1",
            name: "ASUS ROG Strix G16 Gaming Laptop, 165Hz Display, NVIDIA® GeForce RTX™ 4060, Intel Core i7-13650HX, 16GB DDR5, 1TB PCIe Gen4 SSD, Wi-Fi 6E, Windows 11, G614JV-AS74",
            curentPrice: "1,323.83",
            platformName: "Amazon",
            user_id: 3,
            created_at: "2025-04-24T10:41:05.000000Z",
            updated_at: "2025-04-24T10:41:05.000000Z",
            productImage: "https://m.media-amazon.com/images/I/81GrCeuCzxL._AC_SX355_.jpg",
            hestory: [
                {
                    id: 1,
                    product_id: 1,
                    CurrentPrice: "1,323.83",
                    priceDiff: 0,
                    created_at: "2025-04-24T10:41:06.000000Z",
                    updated_at: "2025-04-24T10:41:06.000000Z"
                }
            ]
        },
        hestory: [
            {
                id: 1,
                product_id: 1,
                CurrentPrice: "1,323.83",
                priceDiff: 0,
                created_at: "2025-04-24T10:41:06.000000Z",
                updated_at: "2025-04-24T10:41:06.000000Z"
            }
        ],
        compairedProducts: null
    });
    const [diff, setdiff] = useState(productInfo.data.hestory[0].priceDiff);
    const { id } = useParams();




    useEffect(() => {
        const getInfo = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                const response = await ProductInfo(id, token);
                setProductInfo(response?.data);
                setdiff(response?.data.data.hestory.at(-1).priceDiff);
                const resultArray = Object.values(response?.data.compairedProducts).map((str: any) => {
                    const parsed = JSON.parse(str);
                    return parsed.data;
                });
                setComp(resultArray);
                setLoading(false);
            }
        }
        getInfo();
    }, []);




    return (
        <>
            <Navbar />
            {loading ?
                (
                    <div className="text-center">
                        <LoadingSpiner className={"w-[20%] mx-auto"} />
                        <h2 className="font-medium text-2xl text-[#3E6E97]">Please wait this mite take some time</h2>
                    </div>
                )
                : (
                    <>
                        <div className="min-h-screen flex flex-col bg-white">
                            {/* Header/Navigation */}
                            {/* Main Content */}
                            <main className="flex-grow">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className=" rounded-lg overflow-hidden">
                                        <div className="p-6 flex justify-between flex-wrap">
                                            {/* Product Header */}
                                            <div>
                                                <ProductCurrentInfo title={productInfo?.data.name} price={productInfo?.data.curentPrice} image={productInfo?.data.productImage} priceDrop={diff} url={productInfo.data.url} />
                                                {/* Price History */}
                                                <PriceChart history={productInfo?.data.hestory} />

                                                {/* Platform Comparison */}
                                                <ProcutCompair compaired={comp} mainPlatfornm={productInfo.data.platformName} mainPrice={productInfo?.data.curentPrice} />
                                            </div>

                                            <div className="">
                                                {/* Left Column */}
                                                <RightSide />

                                                {/* Right Column */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>

                            {/* Footer */}
                            <Footer />
                        </div>
                    </>
                )}

        </>
    )
}

export default ProductDetailPage
