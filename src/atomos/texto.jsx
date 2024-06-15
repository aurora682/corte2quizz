import React from 'react';
import '../assets/css/main.css';
function Texto(props) {
  return (
    <>
    <p className={props.className}>{props.textoP}</p>
    </>
  )
}

export default Texto
