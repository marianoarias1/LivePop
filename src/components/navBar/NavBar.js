import React from 'react'
import './navBar.css'
import {BsCartFill} from 'react-icons/bs'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <div className='item-container'>
            <ul className='li-container'>
                <li>HOME</li>
                <li>CD'S</li>
                <li>ARIANA GRANDE</li>
                <li>DUA LIPA</li>
            </ul>
        </div>

        <div className='logo-container'>
            <h1>LIVE POP</h1>
        </div>

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
    </nav>
  )
}