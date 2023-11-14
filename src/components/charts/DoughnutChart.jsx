import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {

    const data = {
        datasets: [
            {
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(0, 184, 172, 1)',
                    'rgba(35, 62, 155, 1)',
                    'rgba(149, 83, 160, 1)',
                
                ],
                
             
            },
        ],
    };

    const options = {
     radius: 70,
    //  barPercentage: 0.1,  
    //  borderWidth: 0.1,
    //  circumference: 360,
    //  animateScale: true
    };

    return (
        <div className='h-[200px]'>
            <Doughnut data={data} options={options}>
            </Doughnut>
        </div>
    )
}

export default DoughnutChart;
