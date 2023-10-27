import React from 'react'
import './itemListContainerStyles.css'
import { Item } from '../item/Item'
import {products} from '../../JSON/products.js'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
  const {artistname} = useParams();

  return (
    <main className='main-list-items'>
        <div className='title-container'>
            <h2>PRODUCTOS</h2>
        </div>
        <div className='product-container'> 
          {
            artistname ? 
            products.map((filteredProduct)=>{
              if(filteredProduct.artistname === artistname){
                return <Item key={filteredProduct.id} product={filteredProduct}/>
              }
            })
            :
            products.map((notFilteredProduct)=>{
              return <Item key={notFilteredProduct.id} product={notFilteredProduct}/>
            })
          }

        </div>
    </main>
  )
}
