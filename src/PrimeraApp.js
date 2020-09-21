import React from 'react';
import PropTypes from 'prop-types';
//import React, {Fragment} from 'react';


const PrimeraApp = ({saludo, subtitulo= 'Desarrolla Nuevas habilidades' }) => { 

   
    return (

    <>
        <h1> {saludo} </h1>
    <p>{subtitulo}</p>
    </>
    );
}
PrimeraApp.propsTypes = {
    saludo: PropTypes.string.isRequired
}
export default PrimeraApp;