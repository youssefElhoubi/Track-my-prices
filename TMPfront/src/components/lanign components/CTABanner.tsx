import React from "react"

const CTABanner: React.FC = () => {
    return (
        <section className="bg-blue-600 py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Saving Today</h2>
                <p className="text-white text-lg mb-8">Join thousands of smart shoppers already saving with TMP</p>
                <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-md hover:bg-blue-50 transition-colors">
                    Get Started - It's Free
                </button>
            </div>
        </section>
    )
}

export default CTABanner
