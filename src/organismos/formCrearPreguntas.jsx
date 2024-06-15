import React, { useEffect, useState } from 'react'
import CrearPregunta from '../moleculas/CrearPregunta'
import Boton from '../atomos/Boton';
import AlertaPreguntaAbierta from '../moleculas/AlertaPreguntaAbierta';
import AlertaOM from '../moleculas/alertaOM';
function FormCrearPreguntas() {
  const [cambioBoton,setCambioBoton]=useState("off");
  const [cambioBoton2,setCambioBoton2]=useState("off");
  const [cambioBoton3,setCambioBoton3]=useState("off");
  const [textoBoton,setTextoBoton]=useState("off");
  const [textoBoton2,setTextoBoton2]=useState("off");
  const [textoBoton3,setTextoBoton3]=useState("off");
  const [paBotonStatus,setPaBotonStatus]=useState(false);
  const [pvfBotonStatus,setPvfBotonStatus]=useState(false);
  const [pomBotonStatus,setPomBotonStatus]=useState(false);

 
  const handlerClickBotonOFF=()=>{
    if(cambioBoton==="off"){
      setCambioBoton("on");
      setTextoBoton("on");
      setPaBotonStatus(true);
    }
    else{
      setCambioBoton("off");
      setTextoBoton("off");
      setPaBotonStatus(false)
    }
  }
  const handlerClickBotonOFF2=()=>{
    if(cambioBoton2==="off"){
      setCambioBoton2("on");
      setTextoBoton2("on");
      setPvfBotonStatus(true);
    }
    else{
      setCambioBoton2("off");
      setTextoBoton2("off");
      setPvfBotonStatus(false);
    }
  }
  const handlerClickBotonOFF3=()=>{
    if(cambioBoton3==="off"){
      setCambioBoton3("on");
      setTextoBoton3("on");
      setPomBotonStatus(true);
    }
    else{
      setCambioBoton3("off");
      setTextoBoton3("off");
      setPomBotonStatus(false);
    }
  }


  return (
    <div className='contenedorFormularioCrearPregunta'>
      <CrearPregunta classNameBoton={cambioBoton}  onClick={()=>handlerClickBotonOFF()} textoP="Pregunta abierta" textoBoton={textoBoton}/>
      <CrearPregunta classNameBoton={cambioBoton2} onClick={()=>handlerClickBotonOFF2()} textoP="Pregunta verdadero/falso" textoBoton={textoBoton2}/>
      <CrearPregunta classNameBoton={cambioBoton3} onClick={()=>handlerClickBotonOFF3()} textoP="Pregunta opcion multiple" textoBoton={textoBoton3}/>
    <Boton classNameBoton="off" textoBoton="Guardar formulario"/>
    {paBotonStatus&&(
    <AlertaPreguntaAbierta onClick={()=>handlerClickBotonOFF()}/>
    )}
    {pomBotonStatus&&(
    <AlertaOM onClick={()=>handlerClickBotonOFF3()}/>
    )}
    </div>

  )
}

export default FormCrearPreguntas
