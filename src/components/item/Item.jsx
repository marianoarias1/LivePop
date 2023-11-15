import React from 'react'
import './itemStyles.css'
import { Link } from 'react-router-dom';
import { useProductContext } from '../../hooks/useProductContext';

export const Item = ({product}) => {
    const {setShowDetail} = useProductContext();

    function openDetail(){
        setShowDetail(product)
    }
return (
  <div className='product-card-container'>
      <div className='product-card'>
          <div className='image-container'>
              <img src={product.src} alt={product.name}/>
              
              <div className='btn-container'>
                  <Link to={`/detail/${product.id}`}><button onClick={openDetail}>VER DETALLE</button></Link>
              </div>
          </div>
          <div className='product-items'>
              <h3>{product.name}</h3>
              <h4>{product.artist}</h4>
              <span>${product.price}</span>
          </div>
      </div>
  </div>
)
}
