"use client"
import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'ludovic@tec.mx') {
        alert('¡Puedes entrar a la página!');
      } else {
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        alert('¡No puedes entrar a la página!');
      }
  
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className=" size-3/12  mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
      >
        Enviar
      </button>
    </form>

  </div>
  );
};

export default Formulario;
