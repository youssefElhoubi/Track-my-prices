import React from 'react'

type props = {
    compaired: compaired[]
    mainPlatfornm: string
    mainPrice: string
}
type compaired = {
    price: number
    platformName: string
}

const   ProcutCompair: React.FC<props> = ({ compaired, mainPlatfornm, mainPrice }) => {
    console.log(compaired);
    
    return (
        <>
            <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Platform Comparison  </h2>
                <div className="space-y-3">
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-3">
                        <span className="font-medium">{mainPlatfornm}</span>
                        <div className="text-right">
                            <div className="font-medium text-green-600">${mainPrice}</div>
                            <div className="text-xs text-gray-500">In Stock</div>
                        </div>
                    </div>
                    {
                        compaired.map((ele: compaired, i: number) => {
                            const price: number = parseFloat(mainPrice);
                            const diffPercent = (((ele.price - price) / price) * 100).toFixed(2)
                            return (
                                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3" key={i}>
                                    <span className="font-medium">{ele.platformName}</span>
                                    <div className="text-right">
                                        <div className="font-medium">${ele.price}</div>
                                        <div className="text-xs text-gray-500">
                                            {diffPercent > 0 ? "+" : ""}
                                            {diffPercent}% from {mainPlatfornm}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProcutCompair