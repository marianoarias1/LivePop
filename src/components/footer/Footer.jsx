import React from 'react'
import {FiMail} from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import './footerStyles.css'

export const Footer = () => {

    function copyClipboard(){
    navigator.clipboard.writeText('marianoarias123@hotmail.com')
    .then(() => {
        Toastify({
            text: "Email copiado en portapapeles!",
            duration: 1500,
            newWindow: true,
            close: false,
            gravity: "bottom",
            position: "right", 
            stopOnFocus: true,
            style: {
              background: "rgb(187, 208, 227)",
            },
            onClick: function(){}
          }).showToast();
    })
    .catch(err => {
        Toastify({
            text:  `Error el copiar en portapapeles ${err}`,
            duration: 1500,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right", 
            stopOnFocus: true,
            style: {
              background: "rgb(221, 97, 97)",
            },
            onClick: function(){}
          }).showToast();
    })

    }

  return (
    
    <div className='footer-container'>
        <div className='logo-footer-container'>
            <a href="https://www.instagram.com/mariano_arias1/" target="_blank" rel='noreferrer'>
                <BsInstagram className='icon-footer'/>
            </a>
            <a href="https://www.linkedin.com/in/mariano-arias1/" target="_blank" rel='noreferrer'>
                <AiOutlineLinkedin className='icon-footer'/>
            </a>
            <FiMail className='icon-footer' onClick={copyClipboard}/>
        </div>
        <div className='text-container'>

        </div>
    </div>
  )
}
