import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Formulario from './components/formulario'
import Input from './components/input'
import HS from './assets/img/HS.jpg'




function App(){
  return (
    <div className='container mt-5'>
      <img src={HS}/><h5>Inventario Almacen</h5>  
      <Formulario/>
      <Input/>
    </div>
  );
}





export default App;
