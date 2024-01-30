"use client"

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Aquí puedes configurar tus datos de gráfico
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','junio'],
      datasets: [
        {
          label: 'Ventas mensuales',
          data: [12, 19, 3, 5, 2,6],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Creamos el gráfico usando el contexto del canvas
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Limpiamos el gráfico al desmontar el componente
    return () => {
      myChart.destroy();
    };
  }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez al montar el componente

  return <canvas ref={chartRef} width="400" height="200"  />;
};

export default ChartComponent;
