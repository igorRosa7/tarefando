import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { ChartContainer } from './TaskStatsChart.styled';

//tipos das props esperadas, que estão sendo passadas de App.tsx via pendingCountForChart e completedCountForChart
interface TaskStatsChartProps {
    pendingCount: number;
    completedCount: number;
}

const TaskStatsChart: React.FC<TaskStatsChartProps> = ({ pendingCount, completedCount }) => {

    const [chartData, setChartData] = useState<any>(null);

    // Não estava conseguindo utilizar a mesma cor do tema soho do PrimeReact para a fatia do gráfico, então peguei direto das variáveis CSS na função abaixo.
    const documentStyle = getComputedStyle(document.documentElement);

    // useEffect para recalcular quando as contagens (props) mudarem
    useEffect(() => {

        const pendingColor = documentStyle.getPropertyValue('--primary-color').trim() || '#6366F1';
        const completedColor = documentStyle.getPropertyValue('--green-500').trim() || '#22C55E';

        // Estrutura de dados exigida pelo Chart.js (via PrimeReact)
        const data = {
            labels: ['Pendentes', 'Concluídas'],
            datasets: [
                {
                    data: [pendingCount, completedCount],
                    backgroundColor: [
                        pendingColor,
                        completedColor
                    ],
                    hoverBackgroundColor: [
                        pendingColor,
                        completedColor
                    ]
                }
            ]
        };



        setChartData(data);


    }, [pendingCount, completedCount]);

    // configuração do gráfico
    const options = {
        cutout: '60%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: documentStyle.getPropertyValue('--text-color').trim() || '#495057'
                }
            }
        }
    };


    if ((pendingCount === 0 && completedCount === 0) || !chartData) {
        return null;
    }
    return (
        <ChartContainer>
            <h4>Visão Geral</h4>
            <Chart
                type="doughnut" // define o tipo de gráfico
                data={chartData}
                options={options}
            />
        </ChartContainer>
    );
};

export default TaskStatsChart;