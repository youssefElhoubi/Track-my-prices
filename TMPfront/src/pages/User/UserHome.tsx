import React from 'react';
import Navbar from '../../components/UserComponents/Nav';
import Allproducts from '../../components/UserComponents/Allproducts';
import ProductCard from '../../components/product/ProductCard';

const UserHome: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="px-20">
            <Allproducts/>
            </div>
            {/* products main content */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-12 '>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </>
    )
}

export default UserHome