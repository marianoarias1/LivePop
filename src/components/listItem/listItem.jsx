import React from 'react'
import './listItemStyle.css'

export const ListItem = () => {
  return (
    <main className='main-list-items'>
        <div className='items-container'>
            <h2> OOPS LLEGASTE TEMPRANO, AÚN ESTAMOS TRABAJANDO.</h2>
            <span>Pero no es problema. Bienvenido/a LIVE POP 🎉</span>
            <div className='image-container'>
            <iframe src="https://giphy.com/embed/xT5LMM4XqfaSMQcKAM" width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
        </div>

    </main>
  )
}

