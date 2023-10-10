import React from 'react'
import './listItemStyle.css'

export const ListItem = ({message, greeting, gif}) => {
  return (
    <main className='main-list-items'>
        <div className='items-container'>
            <h2>{message}</h2>
            <span>{greeting}</span>
            <div className='image-container'>
            <iframe src={gif} width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
        </div>

    </main>
  )
}
