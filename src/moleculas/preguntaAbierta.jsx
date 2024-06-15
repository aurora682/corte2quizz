import React from 'react';
import Input from '../atomos/input';
import Texto from '../atomos/texto';
import '../assets/css/main.css';
function PreguntaAbierta (props){
  return (
    <>
    <div className='divPreguntaAbierta'>
    <Texto textoP={props.textoN} className={props.className}/>
    <Texto textoP={props.textoP} className={props.className}/>
    <Input placeholder={props.placeholder} className={props.className}/>
    </div>
    </>
  );
};

export default PreguntaAbierta;