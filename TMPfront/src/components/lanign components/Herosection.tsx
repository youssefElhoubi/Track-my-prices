import React from 'react'
import rtx from "../../assets/RTX.jpg";

const Herosection: React.FC = () => {
    return (
        <>
            <div
            style={{
                background : `url(${rtx})`,
                backgroundPosition : "center",
                backgroundSize : "cover",
                backgroundRepeat:"no-repeat"
            }}
                className={`h-[50vh]`}
            >
                <div className=''>
                    
                </div>
            </div>
        </>
    )
}

export default Herosection