import React from 'react'
import './cartPageStyles.css'
import { Link } from 'react-router-dom'
export const CartPage = () => {
  return (
    <div className='cart-page-container'>
        <div className='cart-card-container'>
            <div className='message-container'>
                <h2>OOPS</h2>
                <span>AL PARECER TU CARRITO AÚN NO SE ENCUENTRA DISPONIBLE, LAMENTAMOS LAS DEMORAS</span>
                <Link exact to='/'><button>VOLVER</button></Link>
            </div>
            <div className='image-cart-container'>
                <img src="../assets/backgroundIMG/cartImage.png" alt="cart image" />
            </div>
        </div>
    </div>
  )
}
