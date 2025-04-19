import type React from "react"
import { Link, PriceGraph,Notification } from "../common/Iconse"

const HowItWorks: React.FC = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <Link/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">1. Paste Product URL</h3>
                        <p className="text-gray-600">Copy and paste any product link from supported retailers</p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <PriceGraph/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">2. Track Prices</h3>
                        <p className="text-gray-600">We monitor prices 24/7 and update you on changes</p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <Notification/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">3. Get Alerts</h3>
                        <p className="text-gray-600">Receive notifications when prices hit your target</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
