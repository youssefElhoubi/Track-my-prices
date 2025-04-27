import type React from "react"
import { AlertCircle } from "lucide-react"

type ErrorProps = {
    message: string
    suggestion?: string
}

const ScrapedProductError: React.FC<ErrorProps> = ({
    message,
    suggestion = "Please try again or use a different URL.",
}) => {
    return (
        <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700">Scraped Product Details</h3>
            </div>

            <div className="border border-red-200 bg-red-50 rounded-md p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3 flex-1">
                        <h4 className="text-sm font-medium text-red-800">Unable to analyze product</h4>
                        <p className="mt-1 text-sm text-red-700">{message}</p>
                        {suggestion && <p className="mt-1 text-sm text-red-700">{suggestion}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrapedProductError
