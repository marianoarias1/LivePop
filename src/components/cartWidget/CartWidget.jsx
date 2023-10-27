import React from 'react'
import "./cartWidgetStyles.css" 
import {BsCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  return (
    <div className='cart-container'>
        <div className='item-cart-container'>
          <Link className='link-route' to='/section/cart'>
            <div className='counter-container'>
                <span>0</span>
            </div>

            <div className='cart-icon-container'>
                <BsCartFill className='cart-icon'/>
            </div>
          </Link>
        </div>
    </div>
  )
}
