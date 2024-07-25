import React from "react";

import './Pantalla.css';

export const Pantalla = ({ input }) => {
    return (
        <>
            <div className='input'>
                {input}
            </div>
        </>
    );
}