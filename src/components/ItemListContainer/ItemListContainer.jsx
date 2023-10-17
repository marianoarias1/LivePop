import React from 'react'
import './itemListContainerStyles.css'

export const ItemListContainer = ({message, greeting, gif}) => {
  return (
    <main className='main-list-items'>
        <div className='items-container'>
            <h2>{message}</h2>
            <span>{greeting}</span>
            <div className='image-container'>
            <iframe src={gif} width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen title='iframe'></iframe>
            </div>
        </div>

    </main>
  )
}
