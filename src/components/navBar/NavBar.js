import React from 'react'
import './navBar.css'
import { CartWidget } from '../cartWidget/CartWidget'

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
        
        <CartWidget/>
    </nav>
  )
}