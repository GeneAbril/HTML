import React from 'react'; //dependencias de proyecto
import ReactDOM from 'react-dom'; //dependencias de proyecto
import App from './App'; //llamar a la funcion App

//es una función, recibe 2 parametros(componente y selector)
// 1° parametro - componente document.querySelector("#root")
ReactDOM.render( 
    <App/>, //colocar componente dentro de </>
    document.querySelector("#root")
    );