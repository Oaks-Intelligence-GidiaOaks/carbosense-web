import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ emissions }) => {
    const calculateTotalEmissions = (scope) => {
        return emissions?.filter((sourceData) => sourceData._id === scope)
            .reduce((total, sourceData) => total + sourceData.co2e_total, 0);
    };

    const scope1Total = calculateTotalEmissions('scope1');
    const scope2Total = calculateTotalEmissions('scope2');
    const scope3Total = calculateTotalEmissions('scope3');


    const data = {
        datasets: [
            {
                data: [scope1Total, scope2Total, scope3Total],
                backgroundColor: [
                    'rgba(0, 184, 172, 1)',
                    'rgba(149, 83, 160, 1)',
                    'rgba(35, 62, 155, 1)',
                ],
            },
        ],
    };

    const options = {
        cutout: 60,
        responsive: true,
        maintainAspectRatio: true,
        radius: 70,

        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.formattedValue;
                        return `${label}: ${value} tCO2e`;
                    },
                },
            },
        },
    };


    return (
        <div className='h-[200px] '>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;


