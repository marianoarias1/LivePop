import React from 'react'
import "./itemDetailContainerStyles.css"
import { ItemDetail } from '../itemDetail/ItemDetail'
import { useProductContext } from '../../hooks/useProductContext'


export const ItemDetailContainer = () => {
  const {showDetail , setShowDetail}=useProductContext();

  function closeDetail(){
    setShowDetail(false)
  }
  return (
    <div className='detail-container'>
      {showDetail && <ItemDetail onClose={closeDetail} product={showDetail}/>}
    </div>
  )
}
