import React from 'react';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);
type Root = {
    history : Hestory[]
}


type Hestory = {
    id: number
    product_id: number
    CurrentPrice: string
    priceDiff: number
    created_at: string
    updated_at: string
}


const PriceChart: React.FC<Root> = ( {history} ) => {
    // let delete = "something"
    const data = {
        labels: history.map(item => new Date(item.created_at).toLocaleDateString()), // x-axis: Dates
        datasets: [
            {
                label: 'Price Over Time',
                data: history.map(item => parseFloat(item.CurrentPrice.replace(",", ""))), // y-axis: Prices (converted to numbers)
                fill: false, // No background under the line
                borderColor: 'rgb(75, 192, 192)', // Line color
                tension: 0.3, // Smoothness of the line
            },
        ],
    };

    // Configure the chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: false, // y-axis doesn't have to start at 0
            },
        },
    };

    return (
        <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Price History</h2>
            <div className="bg-gray-50 rounded-lg p-4 h-64 flex items-center justify-center text-gray-500 text-sm">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default PriceChart