import React, { useEffect, useState } from 'react';
import axiosConfig from '../../api/axiosConfig';
import decode from '../../actions/decode';

const Allproducts: React.FC = () => {
    const [total, settotal] = useState(0);
    const [UserInfo, setUserInfo] = useState();
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
                const userInfo = await axiosConfig.get("user/info",{headers:{
                    Authorization:Token
                }})
                setUserInfo(userInfo.data.data.name);
            } catch (error) {
                console.log(error);
            }
        }
        total();
    }, [])

    return (
        <>
            <div className="flex py-7">
                <h1 className='text-3xl font-black mx-auto text-blue-700 bg-red-600'>
                    hello {UserInfo} we have 
                <p>{total} Products Found</p>
                </h1>
            </div>
        </>
    )
}

export default Allproducts