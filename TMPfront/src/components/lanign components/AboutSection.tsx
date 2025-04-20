import React from "react"

const AboutSection: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Text and Stats */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-900">About Track My Prices</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Founded in 2024, Track My Prices was born from a simple idea: shoppers shouldn't have to waste time
                                checking multiple websites or worry about missing the best deals. Our mission is to empower consumers
                                with real-time price intelligence and historical data to make informed purchasing decisions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Stat 1 */}
                            <div className="bg-blue-50 rounded-lg p-6 text-center">
                                <p className="text-blue-600 text-3xl font-bold mb-1">50,000+</p>
                                <p className="text-gray-700">Products Tracked</p>
                            </div>

                            {/* Stat 2 */}
                            <div className="bg-blue-50 rounded-lg p-6 text-center">
                                <p className="text-blue-600 text-3xl font-bold mb-1">1M+</p>
                                <p className="text-gray-700">Price Updates Daily</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="bg-gray-100 rounded-lg flex items-center justify-center min-h-[300px]">
                        <p className="text-gray-400">Our Team Illustration</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
