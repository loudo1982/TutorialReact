"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Home() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleButtonClick = (pagina) => {
    router.push(`/pages/${pagina}`);
  };

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  const paginas = ['botones', 'formulario', 'todolist', 'fetchdata', 'charts', 'chartscountries'];

  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Página Principal</h1>
      <button
        onClick={toggleMenuVisibility}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {menuVisible ? 'Ocultar Menú' : 'Mostrar Menú'}
      </button>
      {menuVisible && (
        <div className="grid grid-cols-2 gap-4">
          {paginas.map((pagina, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(pagina)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Ir a {pagina}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
