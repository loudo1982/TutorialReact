"use client"

import React,{useState} from 'react';


const Miboton = (props) => {
  const [clics, setClics] = useState(0);

  const handleClick = (event) => {
    setClics(clics + 1);
    console.log(`Botón "${props.nombre}" clicado ${clics + 1} veces`);
  
    console.log('Soy',clics);
  }

  return (
        <>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4  "
    onClick={handleClick}>
    <p>{props.nombre} {clics}</p>
  </button></>
  );
}

export default Miboton;
