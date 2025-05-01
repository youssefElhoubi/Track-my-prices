import React, { useState } from 'react'
import Navbar from '../../components/UserComponents/Nav'
import Footer from '../../components/lanign components/Footer'
import userWatchlist from '../../stor/WatchlistStpor';

const MyWatchlist: React.FC = () => {
    const { error, fetchWatchLst, isLoading, response } = userWatchlist()
    const [WatchList, setWatchList] = useState();
    return (
        <>
            <Navbar />
            <Footer />
        </>
    )
}

export default MyWatchlist