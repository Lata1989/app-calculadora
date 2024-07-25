import React from "react";

import './Boton.css';

export const Boton = (props) => {
    
    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };


    return(
        <div
            className={`contenedor-boton ${esOperador(props.children)? 'operador': null}`.trimEnd()}
            onClick={() => props.manejarClick(props.children)}
        >
            {props.children}
        </div>
    );
}