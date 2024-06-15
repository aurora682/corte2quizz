import React from 'react';
import Texto from '../atomos/texto';
import Input from '../atomos/input';
import Boton from '../atomos/Boton';
import '../assets/css/main.css';
function PreguntaVF (props){
  return (
    <>
     <div className='divPreguntaAbierta'>
    <Texto textoP={props.textoN} className={props.className}/>
    <Texto textoP={props.textoP} className={props.className}/>
    <Boton classNameBoton="botonV" textoBoton="Verdadero"/>
    <Boton  classNameBoton="botonF" textoBoton="Falso"/>
    </div>
    </>
  );
};

export default PreguntaVF;