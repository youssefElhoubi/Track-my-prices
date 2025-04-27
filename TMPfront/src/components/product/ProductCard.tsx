import type React from "react"

const ProductCard: React.FC = () => {
    return (
        <div className="md:w-80 rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
                <div className="bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sodzeTlIL4YkFv0QgrZHPBWexaFDFZ.png"
                        alt="Wireless Headphones"
                        className="h-48 object-contain"
                    />
                </div>
                <div className="space-y-2">
                    <h3 className="font-medium text-lg text-gray-900">Wireless Headphones</h3>
                    <p className="text-gray-500 text-sm">Amazon</p>
                    <div className="flex items-center justify-between">
                        <span className="text-green-500 font-medium text-xl">$129.99</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">↓ 25%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
