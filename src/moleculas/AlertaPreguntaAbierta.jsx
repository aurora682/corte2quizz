import React from 'react';
import '../assets/css/main.css';
import Input from '../atomos/input';
import Boton from '../atomos/Boton';
function AlertaPreguntaAbierta (props){
  return (
    <>
    <div className='divAlerta'>
        <div className='alertaCuadro'>
            <Input placeholder="Escribe la pregunta"/>
            <Input placeholder="Escribe la respuesta"/>
            <Boton classNameBoton="botonGuardar" onClick={props.onClick} textoBoton="Guardar"/>
        </div>
    </div>
    </>
  );
};

export default AlertaPreguntaAbierta;