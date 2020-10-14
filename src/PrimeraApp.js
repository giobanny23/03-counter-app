import React from 'react';
import PropTypes from 'prop-types';
//import React, {Fragment} from 'react';


const PrimeraApp = ({saludo, subtitulo }) => { 

   
    return (

    <>
        <h1> {saludo}!!! </h1>
        <p>{subtitulo}</p>
    </>
    );
}
PrimeraApp.propsTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo'
}

export default PrimeraApp;