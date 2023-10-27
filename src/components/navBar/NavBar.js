import React from 'react'
import './navBar.css'
import { CartWidget } from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <div className='item-container'>
            <ul className='li-container'>
                <li><Link className='link-route' to='/'>HOME</Link></li>
                <li><Link className='link-route' to='/category/cd'>CD'S</Link></li>
                <li><Link className='link-route' to='/artist/arianagrande'>ARIANA GRANDE</Link></li>
                <li><Link className='link-route' to='/artist/dualipa'>DUA LIPA</Link></li>
            </ul>
        </div>

        <div className='logo-container'>
            <h1><Link className='link-route' to='/'>LIVE POP</Link></h1>
        </div>
        
        <CartWidget/>
    </nav>
  )
}