import React, { useState, useEffect } from "react";
import Sidebar from "../../components/AdmineComponents/sidebar";
import Header from "../../components/AdmineComponents/Header";
import axiosConfig from "../../api/axiosConfig";
import { AdminProduts } from "../../types/adminProdutsTYpes";
import { Loading } from "../../components/common/Iconse";
import AdminProductCard from "../../components/AdmineComponents/AdminProductCard";

const AdminProductsPage: React.FC = () => {
    const [AdminProducts, setAdminProducts] = useState<AdminProduts | undefined>();
    const [isloading, setisloading] = useState(false)
    useEffect(() => {
        const getProduts = async () => {
            try {
                const token = localStorage.getItem("token")
                const result = await axiosConfig.get("admin/products", {
                    headers: {
                        Authorization: token
                    }
                });
                setAdminProducts(result.data);
            } catch (error) {
                console.log(error);
            } finally {
                setisloading(false)
            }
        }
        getProduts();
    }, [])
    console.log(AdminProducts);


    return (
        <>
            <Header />
            <div className="flex h-screen bg-white">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 flex flex-col">

                    {/* Dashboard Content */}
                        {
                            isloading ? <Loading /> :
                                (
                                    <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 px-12 w-full '>
                                        {AdminProducts?.data.map(ele => {
                                            return (
                                                <div key={ele.id} className="mx-auto">
                                                    <AdminProductCard id={ele.id} url={ele.url} name={ele.name} curentPrice={ele.curentPrice} platformName={ele.platformName} user_id={ele.user_id} created_at={ele.created_at} updated_at={ele.updated_at} productImage={ele.productImage} hestory={ele.hestory} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                        }
                </div>
            </div>
        </>
    )
}
export default AdminProductsPage
