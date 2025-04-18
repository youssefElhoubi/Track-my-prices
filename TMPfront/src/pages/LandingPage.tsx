import React from 'react'
import Footer from '../components/lanign components/Footer'
import Navbar from '../components/lanign components/header'
import Herosection from '../components/lanign components/Herosection'
import WhyTMP from '../components/lanign components/WhyTMP'
import Treanding from '../components/lanign components/treanding'

const LandingPage :React.FC = () => {
    return (
        <>
        <Navbar/>
        <Herosection/>
        <WhyTMP/>
        <Treanding/>
        <Footer/>
        </>
    )
}

export default LandingPage
