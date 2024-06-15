import React, { useState } from 'react';
import Input from '../atomos/input';
import Boton from '../atomos/Boton';

function AlertaOM(props) {
    const [contador,setContador]=useState(0);
    const [arreglo,setArreglo]=useState([]);
    const handlerClickContador=()=>{
        setContador(contador+1);
        setArreglo([...arreglo,<Input className="inputOpcionMultiple" placeholder="Escribe la respuesta"/>]);
    }
    return (
        <>
            <div className='divAlerta'>
                <div className='alertaCuadroOpcionMultiple'>
            <Input className="inputOpcionMultiple" placeholder="Escribe la pregunta"/>
            {arreglo.map((arreglo,index)=>(
                <div key={index}>
                    <Input className="inputOpcionMultiple" placeholder="Escribe la respuesta"/>
                </div>
            ))}
            <Boton classNameBoton="botonGuardar" onClick={()=>handlerClickContador()} textoBoton="Agregar respuesta"/>
            <Boton classNameBoton="botonGuardar" onClick={props.onClick} textoBoton="Guardar"/>
                </div>
            </div>
        </>
    );
};

export default AlertaOM;