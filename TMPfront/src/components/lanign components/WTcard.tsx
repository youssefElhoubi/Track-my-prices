import React from 'react'
type props = {
    title: string,
    description: string,
    Icone: React.FC
}

const WTcard: React.FC<props> = ({ title, description, Icone }) => {
    return (
        <>
            <div className="w-[90%] max-w-md p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center mb-3 mx-2">
                <div className="mb-4">
                    <Icone/>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </>
    )
}

export default WTcard