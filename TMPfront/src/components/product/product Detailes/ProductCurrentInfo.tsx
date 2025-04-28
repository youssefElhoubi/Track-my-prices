import React from 'react'

const ProductCurrentInfo: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col md:flex-row md:items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-md overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Po7CxlkSGrLZ3DJAZhOnnCwxZT1iLX.png"
                        alt="Wireless Noise-Canceling Headphones"
                        className="w-full h-full object-contain"
                    />
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Wireless Noise-Canceling Headphones</h1>
            </div>

            <div className="mt-4 md:mt-0 text-right">
                <div className="text-2xl md:text-3xl font-bold text-green-600">$249.99</div>
                <div className="text-sm text-gray-600">
                    Current Price · <span className="text-green-600">-15% from $294.99</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCurrentInfo