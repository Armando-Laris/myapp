import logo from './img/logo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Formulario from './components/formulario'
import Validacion from './components/ejercicio'


function App(){
  return (
    <div className='container mt-5'>
      <Formulario/>
      <Validacion/>
    </div>
  );
}





export default App;
