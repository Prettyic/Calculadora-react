import React, {useState} from 'react'
import Boton from './Boton.jsx';
import Pantalla from"./Pantalla.jsx"
import"../style/App.css"
import { evaluate } from 'mathjs';
function App(){
  const[operacion,cambiarOperacion]=useState("");
  const agregarCaracter=(caracter)=>{
    cambiarOperacion(operacion+caracter);
  };
  const BorrarPantalla=()=>{
    cambiarOperacion("")
    
  }
  const borrarCaracter=()=>{
    cambiarOperacion(operacion.slice(0,operacion.length-1))
  }
  const realizarOperacion = () => {
    try {
      cambiarOperacion(eval(operacion).toString()); // Evalúa la operación ingresada
    } catch (error) {
      cambiarOperacion("Error");
    }
  };
  
  return (
    <div className='App'>
      <h1>Calculadora Ivanna</h1>
      <div className='contenedor'>
        <Pantalla entrada={operacion}/>
        <div className='fila'>
          <Boton hacerClick={agregarCaracter}>{"("}</Boton>
          <Boton hacerClick={agregarCaracter}>{")"}</Boton>
          <Boton hacerClick={borrarCaracter}>	&#9003;</Boton>
          <Boton hacerClick={agregarCaracter}>/</Boton>
        </div>
        <div className='fila'>
        <Boton hacerClick={agregarCaracter}>7</Boton>
        <Boton hacerClick={agregarCaracter}>8</Boton>
        <Boton hacerClick={agregarCaracter}>9</Boton>
        <Boton hacerClick={agregarCaracter}>*</Boton>
        </div>
        <div className='fila'>
        <Boton hacerClick={agregarCaracter}>4</Boton>
        <Boton hacerClick={agregarCaracter}>5</Boton>
        <Boton hacerClick={agregarCaracter}>6</Boton>
        <Boton hacerClick={agregarCaracter}>-</Boton>

        </div>
        <div className='fila'>
        <Boton hacerClick={agregarCaracter}>1</Boton>
        <Boton hacerClick={agregarCaracter}>2</Boton>
        <Boton hacerClick={agregarCaracter}>3</Boton>
        <Boton hacerClick={agregarCaracter}>+</Boton>
        </div>
        <div className='fila'>
        <Boton  hacerClick={BorrarPantalla}>AC</Boton>
        <Boton hacerClick={agregarCaracter}>0</Boton>
        <Boton hacerClick={agregarCaracter}>.</Boton>
        <Boton hacerClick={realizarOperacion}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;