import React from 'react'
import WTcard from './WTcard'
import {PriceGraph,Compaire,Notification} from "../common/Iconse";

const WhyTMP: React.FC = () => {
    return (
        <>
            <div className='my-8'>
                <h2 className='text-center text-4xl font-black text-black'> Why Choose TMP? </h2>
                <div className='flex flex-wrap justify-between justify-center '>
                    <WTcard title={'Price Tracking'} description={'Monitor price history with interactive charts and get insights into price trends.'} Icone={PriceGraph}/>
                    <WTcard title={'Multi-Store Comparison'} description={'Compare prices across Amazon, eBay, Walmart and other major retailers.'} Icone={Compaire}/>
                    <WTcard title={'Smart Alerts'} description={'Get instant notifications when prices drop below your target.'} Icone={Notification}/>
                </div>
            </div>
        </>
    )
}

export default WhyTMP