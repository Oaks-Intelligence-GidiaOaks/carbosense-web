import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);


const StackedBarChart = ({ labels, datasets }) => {

    if (!labels || labels.length === 0 || !datasets || datasets.length === 0) {
        return <div className='text-sm text-primary-black flex items-center justify-center'>No records to display</div>;
    }

    const data = {
        labels,
        datasets,
    };
    const options = {
        scales: {
            x: { stacked: true, grid: { display: false }, borderWidth: 2 },
            y: { stacked: true,  display: false,  gridLines: {
                display: false, 
            }, }
        },

      
     
    };

    return (
        <div className=''>
            <Bar data={data} options={options} >
            </Bar>
        </div>
    )
}

export default StackedBarChart