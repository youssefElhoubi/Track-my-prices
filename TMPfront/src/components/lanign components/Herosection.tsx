import React from 'react'
import rtx from "../../assets/RTX.jpg";

const Herosection: React.FC = () => {
    return (
        <>
            <div
                style={{
                    background: `url(${rtx})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
                className={`h-[50vh]`}
            >
                <div className='mx-auto w-[75%] h-full flex justify-center text-white py-4 flex-col items-center gap-10'>
                    <h1 className='text-5xl font-bold text-center ' >Smart Shopping Starts Here</h1>
                    <p className='text-center'>
                        Track prices across multiple stores, get price drop alerts, and save money effortlessly.
                    </p>
                    <div className='w-[20%] bg-white  rounded-2xl align-middle h-10 text-center'>
                        <p className='text-[#2563EB] text-center h-8 mt-1'>
                            <a href="/signup">Start Tracking Free</a>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Herosection