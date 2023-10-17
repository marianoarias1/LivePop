import React from 'react'
import "./cartWidgetStyles.css" 
import {BsCartFill} from 'react-icons/bs'

export const CartWidget = () => {
  return (
    <div className='cart-container'>
        <div className='item-cart-container'>
            <div className='counter-container'>
                <span>0</span>
            </div>

            <div className='cart-icon-container'>
                <BsCartFill className='cart-icon'/>
            </div>
        </div>
    </div>
  )
}
