import React from 'react'
import './cartPageStyles.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../hooks/useCartContext'
import { CartList } from '../cartList/CartList'
export const CartPage = () => {
  const { cart,removeToCart } = useCartContext();

  const handleDelete=(product, qty)=>{
      removeToCart(product, qty)
  } 
  return (
    <div className='cart-page-container'>
      <div className='cart-card-container'>
        {
          cart.length !==0 ?
            <div className='products-cart-container'>
              {
                cart.map((e) => {
                  return <CartList product={e} key={e.id} handleDelete={handleDelete}/>
                })
              }
              <div className="checkout-btn-container">
                <Link to='/cart/checkout'><button>FINALIZAR COMPRA</button></Link>
              </div>
            </div>
            :
            <>
              <div className='message-container'>
                <h2>OOPS</h2>
                <span>AL PARECER TU CARRITO ESTÁ VACÍO</span>
                <Link to='/'><button>VOLVER</button></Link>
              </div>
              <div className='image-cart-container'>
                <img src="../assets/backgroundIMG/cartImage.png" alt="cart image" />
              </div>
            </>
        }
      </div>
    </div>
  )
}
