import React from 'react'
import Footer from '../components/lanign components/Footer'
import Navbar from '../components/lanign components/header'
import Herosection from '../components/lanign components/Herosection'
import WhyTMP from '../components/lanign components/WhyTMP'
import Treanding from '../components/lanign components/treanding'
import HowItWorks from '../components/lanign components/HowItWork'
import AboutSection from '../components/lanign components/AboutSection'
import PricingTiers from '../components/lanign components/PricingTiers'
import CTABanner from '../components/lanign components/CTABanner'

const LandingPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Herosection />
            <WhyTMP />
            <Treanding />
            <HowItWorks />
            <AboutSection />
            <PricingTiers />
            <CTABanner />
            <Footer />
        </>
    )
}

export default LandingPage
