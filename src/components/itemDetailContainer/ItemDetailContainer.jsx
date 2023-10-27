import React, { useState } from 'react'
import "./itemDetailContainerStyles.css"
import { ItemDetail } from '../itemDetail/ItemDetail'
import { useProduct } from '../../Context/productContext'


export const ItemDetailContainer = () => {

  const {showDetail , setShowDetail}= useProduct();

  function closeDetail(){
    setShowDetail(false)
  }
  return (
    <div className='detail-container'>
      {showDetail && <ItemDetail onClose={closeDetail} product={showDetail}/>}
    </div>
  )
}
