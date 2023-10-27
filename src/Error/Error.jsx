import React from 'react'
import './errorStyles.css'
import { Link } from 'react-router-dom'
export const Error = () => {
  return (
    <div className='main-error-container'>

        <div className='card-error-container'>
            <h2>OOPS AL PARECER OCURRIÓ UN ERROR</h2>
            <span>Deseas volver a la página principal?</span>
            <Link exact to='/'><button>VOLVER</button></Link>
        </div>

    </div>
  )
}
