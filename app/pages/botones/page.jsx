"use client"

import Miboton from "/app/component/boton";

export default function Home() {

  const losnombres=['Ludo','Juan','Felipe','María','Juan']

  return (
    <div>
      <p className="flex justify-center pt-4 text-white font-bold">Mi primera página</p>
      {losnombres.map((element,index)=>{return <Miboton key={index}  nombre={element}/>})}

     {/* <Miboton nombre={"Ludo"}/> <Miboton nombre={"Felipe"}/><Miboton nombre={"maría"}/><Miboton nombre={"Juan"}/><Miboton nombre={"Felipe"}/><Miboton nombre={"David"}/>*/}
    </div>
   
  );
}