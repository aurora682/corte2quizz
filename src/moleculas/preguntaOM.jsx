import Boton from '../atomos/Boton';
import React from 'react';
import Texto from '../atomos/texto';
import BotonOpcion from './botonOpcion';
function PreguntaOM(props) {
    return (
        <>
            <div className='divPreguntaAbierta'>
                <Texto textoP={props.textoN} className={props.className} />
                <Texto textoP={props.textoP} className={props.className} />
                <BotonOpcion classNameBoton="botonPalomitaSeleccionada" textoBoton={props.b1} />
                <BotonOpcion classNameBoton="botonPalomitaNoSeleccionada"textoBoton={props.b2} />
                <BotonOpcion classNameBoton="botonPalomitaNoSeleccionada"textoBoton={props.b3} />
            </div>
        </>
    );
};

export default PreguntaOM;