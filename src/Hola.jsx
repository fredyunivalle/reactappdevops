import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'


import './Hola.css';

function Hola() {
    return (
        <div className="hola">
        <FontAwesomeIcon icon={faSmile} size="3x" color="green" />
        <FontAwesomeIcon icon={faHandPaper}  size="3x" color='blue' /> 
         <h1>Hola, queridos estudiantes</h1> 
         <FontAwesomeIcon icon={faHandPaper}  size="3x" color='red' />
        </div>
    );
}

export default Hola;
