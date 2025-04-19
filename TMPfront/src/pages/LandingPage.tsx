import React from 'react'
import Footer from '../components/lanign components/Footer'
import Navbar from '../components/lanign components/header'
import Herosection from '../components/lanign components/Herosection'
import WhyTMP from '../components/lanign components/WhyTMP'
import Treanding from '../components/lanign components/treanding'
import HowItWorks from '../components/lanign components/HowItWork'

const LandingPage :React.FC = () => {
    return (
        <>
        <Navbar/>
        <Herosection/>
        <WhyTMP/>
        <Treanding/>
        <HowItWorks/>   
        <Footer/>
        </>
    )
}

export default LandingPage
