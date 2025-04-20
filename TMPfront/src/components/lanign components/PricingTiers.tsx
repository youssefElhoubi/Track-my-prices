import React from "react"

const PricingTiers: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-5xl mx-auto overflow-hidden">
                <h2 className="text-2xl font-bold text-center py-6">Our Tiers</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Basic Tier */}
                    <div className="bg-blue-50 p-8 flex flex-col items-center w-[55%]">
                        <div className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center mb-8">
                            <span className="text-blue-500 text-xl font-medium">Basic</span>
                        </div>

                        <div className="space-y-4 w-full mb-8">
                            <div className="flex items-start">
                                <div className="h-5 w-5 rounded-full border border-gray-500 flex-shrink-0 mt-0.5"></div>
                                <span className="ml-3">Track up to 5 products</span>
                            </div>

                            <div className="flex items-start">
                                <div className="h-5 w-5 rounded-full border border-gray-500 flex-shrink-0 mt-0.5"></div>
                                <span className="ml-3">View basic price history (last 7 days)</span>
                            </div>

                            <div className="flex items-start">
                                <div className="h-5 w-5 rounded-full border border-gray-500 flex-shrink-0 mt-0.5"></div>
                                <span className="ml-3">Email notifications for price drops</span>
                            </div>

                            <div className="flex items-start">
                                <div className="h-5 w-5 rounded-full border border-gray-500 flex-shrink-0 mt-0.5"></div>
                                <span className="ml-3">Compare prices across limited platforms</span>
                            </div>

                            <div className="pl-8 text-sm text-gray-600">(e.g., 2-3 sites per product)</div>

                            <div className="flex items-start text-red-500">
                                <span className="font-bold text-lg">✕</span>
                                <span className="ml-3">Limitations:</span>
                            </div>

                            <div className="flex items-start">
                                <div className="h-5 w-5 rounded-full border border-gray-500 flex-shrink-0 mt-0.5"></div>
                                <span className="ml-3">No advanced analytics or price trends</span>
                            </div>
                        </div>

                        <button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-md w-full max-w-xs mt-auto">
                            Free
                        </button>
                    </div>

                    {/* Pro Tier */}
                    <div className="bg-blue-50 p-8 flex flex-col items-center w-[55%]">
                        <div className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center mb-8">
                            <span className="text-blue-500 text-xl font-medium">pro</span>
                        </div>

                        <div className="space-y-4 w-full mb-8">
                            <div className="flex items-start">
                                <div className="h-5 w-5 rounded-full border border-gray-500 flex-shrink-0 mt-0.5"></div>
                                <span className="ml-3">Everything in Free, PLUS:</span>
                            </div>

                            <div className="flex items-start">
                                <div className="h-5 w-5 rounded-full border border-gray-500 flex-shrink-0 mt-0.5"></div>
                                <span className="ml-3">Track up to 50 products</span>
                            </div>

                            <div className="flex items-start">
                                <div className="h-5 w-5 rounded-full border border-gray-500 flex-shrink-0 mt-0.5"></div>
                                <span className="ml-3">Unlimited price history</span>
                            </div>

                            <div className="flex items-start">
                                <div className="h-5 w-5 rounded-full border border-gray-500 flex-shrink-0 mt-0.5"></div>
                                <span className="ml-3">Instant notifications for price drops</span>
                            </div>

                            <div className="flex items-start">
                                <div className="h-5 w-5 rounded-full border border-gray-500 flex-shrink-0 mt-0.5"></div>
                                <span className="ml-3">Compare prices across all available</span>
                            </div>

                            <div className="pl-8">platforms</div>
                        </div>

                        <button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-md w-full max-w-xs mt-auto">
                            4.99$
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingTiers
