import React from 'react'
import Texto from '../atomos/texto';
import Boton from '../atomos/Boton';
import '../assets/css/main.css';
function CrearPregunta(props) {
  return (
    <div className='contenedorCrearPregunta'>
      <Texto textoP={props.textoP}/>
      <div className='contenedorBotonOnnOff'>
        <Boton onClick={props.onClick} classNameBoton={props.classNameBoton} textoBoton={props.textoBoton}/>
      </div>
    </div>
  )
}

export default CrearPregunta
