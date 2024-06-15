import React from 'react'

function Boton(props) {
  return (
    <button className={props.classNameBoton} onClick={props.onClick}>{props.textoBoton}</button>
  )
}

export default Boton
