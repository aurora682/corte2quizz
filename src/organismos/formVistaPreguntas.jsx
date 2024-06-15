import React from 'react';
import PreguntaAbierta from '../moleculas/preguntaAbierta';
import '../assets/css/main.css'
import PreguntaVF from '../moleculas/preguntaVF';
import PreguntaOM from '../moleculas/preguntaOM';
import Boton from '../atomos/Boton';
function FormVistaPreguntas (){
  return (
    <>
    <div className='padreDivFormVerPreguntas'>
    <div className='divFormularioVerPreguntas'>
        <PreguntaAbierta textoN="1" textoP="¿Quien descubrio america?"/>
        <PreguntaVF textoN="2" textoP="¿Cristobal colon descubrio america?"/>
        <PreguntaAbierta textoN="3" textoP="¿Que significa descubrimiento?"/>
        <PreguntaVF textoN="4" textoP="¿La universidad Politecnica de chiapas esta en suchiapa?"/>
        <div style={{display:"flex", width:"100%"}}>
        <PreguntaOM b2="1244" b3="144" b1="1944" textoN="5" textoP="¿En que año se descubrio america?"/>
        </div>
    </div>
        <Boton classNameBoton="botonGuardar" textoBoton="Enviar"/>
    </div>
    </>
  );
};

export default FormVistaPreguntas;