import React from 'react';
import '../assets/css/main.css';
import Texto from '../atomos/texto';
import Boton from '../atomos/Boton';
function BotonOpcion (props){
  return (
    <>
     <div className='divBotonOpcion'>
        <Texto textoP={props.textoBoton}/>
    <Boton classNameBoton={props.classNameBoton} textoBoton="✓"/>
    </div>
    </>
  );
};

export default BotonOpcion;