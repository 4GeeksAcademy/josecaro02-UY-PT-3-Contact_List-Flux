import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

const NuevoContacto = () => {
  //logica
  const navigate = useNavigate();

  return (
    <div className="container border border-info">
      <h1>Este es mi componente Nuevo Contact</h1>

      <button className='btn btn-primary' onClick={() => {
        /* hace un post con la información del contacto*/
        //el navigate para este caso deberia usarrse en el primer o segundo .then()
        navigate("/")
      }}>Crear Contacto</button>

    </div>
  )
}

export default NuevoContacto