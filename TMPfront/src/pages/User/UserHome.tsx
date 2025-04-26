import React, { useState, useEffect } from 'react';
import Navbar from '../../components/UserComponents/Nav';
import Allproducts from '../../components/UserComponents/Allproducts';
import ProductCard from '../../components/product/ProductCard';
import ProductsStor from '../../stor/ProductsStore';
import { Loading } from "../../components/common/Iconse";

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
    console.log(response);
    
    
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
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    )
            }

        </>
    )
}

export default UserHome