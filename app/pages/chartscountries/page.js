
"use client"
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const ChartCountries = () => {
  const [countries, setCountries] = useState([]);
  const chartRef = useRef(null);
  const getRandomElements = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const randomCountries = getRandomElements(data, 10);

       

        setCountries(randomCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();

  }, []); // Dependencia vacía para que se ejecute solo al montar el componente

  useEffect(() => {
    if (countries.length === 0) {
      // Si no hay datos, salir y esperar a que se carguen
      return;
    }

    // Resto del código del efecto...

    const populationData = countries.map(country => country.population);
    const labelData = countries.map(country => country.name.common);

    const data = {
      labels: labelData,
      datasets: [
        {
          label: 'Población',
          data: populationData,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: false,
          color: 'white', 
        },
        x: {
          ticks: {
            color: 'white', // Cambia el color de las etiquetas del eje x a blanco
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'white', // Cambia el color del texto de la leyenda a blanco
          },
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    return () => {
      myChart.destroy();
    };

  }, [countries]);

  if (countries.length === 0) {
    // Mientras se cargan los datos, puedes mostrar un mensaje de carga o cualquier otra interfaz de carga
    return <div>Cargando datos...</div>;
  }

  // Cuando los datos están cargados, renderizar el gráfico
  return <canvas ref={chartRef}  />;

  
};

export default ChartCountries;
