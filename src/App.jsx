import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [encendido, setEncendido] = useState(false);
  const [posicion, setPosicion] = useState({x:0, y:0})

  useEffect(() => {
    const perseguir = (e) => {
      setPosicion({x:e.clientX, y:e.clientY});
    };
    if (encendido) {
      window.addEventListener("pointermove", perseguir);
    }


    return ()=>{
      window.removeEventListener("pointermove", perseguir)
    }
  }, [encendido]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Mouse Follower:</h1>
      <button
        onClick={() => setEncendido(!encendido)}
        className="bg-red-500 px-5 rounded-md"
      >
        {encendido ? "Desactivar" : "Activar"}
      </button>

      <div style={{
        position: 'absolute',
        background: 'blue',
        borderRadius: 200,
        height: 100,
        width: 100,
        top: posicion.y-50,
        left: posicion.x-50,
        zIndex:-1
      }}></div>
    </div>
  );
};

export default App;
