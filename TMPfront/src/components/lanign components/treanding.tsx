import React from 'react'
import ProductCard from '../product/ProductCard'

const Treanding: React.FC = () => {
    return (
        <>
            <div className='bg-[#F3F4F6] p-8  '>
                <h2 className='text-center text-4xl font-black text-black my-2'> Trending Products </h2>
                <div className='flex justify-between'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>

        </>
    )
}

export default Treanding