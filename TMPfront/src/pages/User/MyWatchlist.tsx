import React, { useEffect, useState } from 'react'
import Navbar from '../../components/UserComponents/Nav'
import Footer from '../../components/lanign components/Footer'
import userWatchlist from '../../stor/WatchlistStpor';
import Allproducts from '../../components/UserComponents/Allproducts';
import { Loading, LoadingSpiner } from '../../components/common/Iconse';
import UserProductCard from '../../components/product/UserProductCard';

const MyWatchlist: React.FC = () => {
    const { error, fetchWatchLst, isLoading, response } = userWatchlist()
    const [WatchList, setWatchList] = useState<any>();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) fetchWatchLst(token);
    }, []);

    useEffect(() => {
        setWatchList(response?.data);
    }, [response]);
    // console.log(WatchList?.hestory);

    return (
        <>
            {isLoading ? <LoadingSpiner /> :
                (
                    <>
                        <Navbar />
                        <div className="px-20">
                            <Allproducts />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-12 '>
                            {
                                WatchList?.map((ele: any) => {
                                    return (
                                        <div key={ele.id}>
                                            <UserProductCard id={ele.id} url={ele.url} name={ele.name} curentPrice={ele.curentPrice} platformName={ele.platformName} user_id={ele.user_id} created_at={ele.created_at} updated_at={ele.updated_at} productImage={ele.productImage} hestory={ele.hestory} />
                                        </div>
                                    )
                                })}
                        </div>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default MyWatchlist