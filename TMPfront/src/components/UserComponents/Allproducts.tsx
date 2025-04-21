import React, { useEffect, useState } from 'react';
import axiosConfig from '../../api/axiosConfig';

const Allproducts: React.FC = () => {
    const [total, settotal] = useState(0);
    useEffect(() => {
        const total = async () => {
            try {
                const Token = localStorage.getItem("token");
                const totalProducts = await axiosConfig.get("product/total", {
                    headers: {
                        Authorization: Token
                    }
                });
                settotal(totalProducts.data.totale);
            } catch (error) {
                console.log(error);
            }
        }
        total();
    }, [])

    return (
        <>
            <div className="flex justify-between py-7">
                <h1 className='text-3xl font-black'>
                    All Tracked Products
                </h1>
                <p>{total} Products Found</p>
            </div>
        </>
    )
}

export default Allproducts