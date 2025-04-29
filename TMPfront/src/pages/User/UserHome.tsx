import React, { useState, useEffect } from 'react';
import Navbar from '../../components/UserComponents/Nav';
import Allproducts from '../../components/UserComponents/Allproducts';
import ProductCard from '../../components/product/ProductCard';
import ProductsStor from '../../stor/ProductsStore';
import { Loading } from "../../components/common/Iconse";
import UserProductCard from "../../components/product/UserProductCard";
import Footer from '../../components/lanign components/Footer';

const UserHome: React.FC = () => {
    const [data, setdata] = useState<any>("");
    const { error, fetchProducts, isloading, response } = ProductsStor();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchProducts(token);
        }
    }, [])
    // setdata(response?.data.data);
    // console.log(response);

    return (
        <>
            <Navbar />
            {/* show the totale products */}
            <div className="px-20">
                <Allproducts />
            </div>
            {
                isloading ? <Loading /> :
                    (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-12 '>
                            {response?.data?.data?.map(ele => {
                                return (
                                    <div key={ele.id}>
                                        <UserProductCard id={ele.id} url={ele.url} name={ele.name} curentPrice={ele.curentPrice} platformName={ele.platformName} user_id={ele.user_id} created_at={ele.created_at} updated_at={ele.updated_at} productImage={ele.productImage} hestory={ele.hestory} />
                                    </div>
                                )
                            })}
                        </div>
                    )
            }
            <div className='mt-5'>
                <Footer />
            </div>
        </>
    )
}
export default UserHome