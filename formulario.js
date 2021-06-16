import { Fragment, useState} from "react";

const Formulario =() =>{
    

    const [datos, setDatos]=useState({
        nombre: '',
        usuario: '',
        password: ''
    })

    const handleInputChange=(event)=>{
    
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos=(event)=>{
        event.preventDefault();
        console.log(datos.nombre +''+ datos.usuario +''+ datos.password)
    }

    const onSubmit=(data)=>{
        console.log(data)
    }
    return(
        <Fragment>
            <h1>ACCESO USUARIO</h1>
            <form className='row' onSubmit={enviarDatos}>
                <div className='col-mb-3'>
                    <input
                      placeholder='ingrese el nombre'
                      className='form-control'
                      type='text'
                      name='nombre'
                      onChange={handleInputChange}
                     
                    ></input>
                </div>
                <div className='col-mb-3'>
                    <input
                      placeholder='Ingrese usuario'
                      className='form-control'
                      type='text'
                      name='usuario'
                      onChange={handleInputChange}
                    ></input>
                </div>
                <div className='col-mb-3'>
                    <input
                      placeholder='ingrese el password'
                      className='form-control'
                      type='password'
                      name='password'
                      onChange={handleInputChange}
                    ></input>
                </div>
                <div className='col-mb-3'>
                    <button className='btn btn-primary' type='submit'>Ingresar</button>
                </div>
            </form>

            <h3>{datos.nombre}-{datos.usuario}-{datos.password}</h3>
        </Fragment>
        
    );
}

export default Formulario;