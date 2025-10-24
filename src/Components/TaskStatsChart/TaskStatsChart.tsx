import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { ChartContainer } from './TaskStatsChart.styled';

interface TaskStatsChartProps {
    pendingCount: number;
    completedCount: number;
}

const TaskStatsChart: React.FC<TaskStatsChartProps> = ({ pendingCount, completedCount }) => {
    
    // Estado para os dados do gráfico
    const [chartData, setChartData] = useState<any>(null);

    // Estado para as opções de configuração
    const [chartOptions, setChartOptions] = useState<any>(null);

    // useEffect para recalcular QUANDO as contagens (props) mudarem
    useEffect(() => {

        const documentStyle = getComputedStyle(document.documentElement);

        // Usaremos --primary-color (geralmente azul/roxo) para Pendentes
        const pendingColor = documentStyle.getPropertyValue('--primary-color').trim() || '#6366F1';

        // Usaremos uma cor de "sucesso" (verde) para Concluídas
        const completedColor = documentStyle.getPropertyValue('--green-500').trim() || '#22C55E';

        // Estrutura de dados exigida pelo Chart.js (via PrimeReact)
        const data = {
            labels: ['Pendentes', 'Concluídas'], 
            datasets: [
                {
                    data: [pendingCount, completedCount], 
                    backgroundColor: [ // Cores das fatias
                        pendingColor,
                        completedColor
                    ],
                    hoverBackgroundColor: [ // Cores ao passar o mouse (opcional)
                        pendingColor,
                        completedColor
                    ]
                }
            ]
        };

        // Opções de configuração do Chart.js
        const options = {
            // 'cutout' define o tamanho do "buraco" no meio.
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

        // Atualiza os estados que serão passados para o <Chart />
        setChartData(data);
        setChartOptions(options);

        // O array de dependências: refaz o cálculo se as contagens mudarem
    }, [pendingCount, completedCount]);

   
   if ((pendingCount === 0 && completedCount === 0) || !chartData || !chartOptions) {
    return null; 
  }
    return (
        <ChartContainer>
            <h4>Visão Geral</h4>
            <Chart
                type="doughnut" // Define o tipo de gráfico
                data={chartData}
                options={chartOptions}
            />
        </ChartContainer>
    );
};

export default TaskStatsChart;