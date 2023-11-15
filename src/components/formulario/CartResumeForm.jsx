import React from 'react'

export const CartResumeForm = ({product}) => {
    return (
        <div className='product-element-card'>
            <div className='image-checkout-container'>
                <img src={product.src} alt={product.name} />
            </div>
            <div className='title-checkout-container'>
                <span className='data-product'>{product.name}</span>
            </div>
            <div className='artist-name-container'>
                <span className='data-product'>{product.artist}</span>
            </div>
            <div className='quantity-container'>
                <span className='data-product'>{product.qty}</span>
            </div>
            <div className='price-container'>
                <span className='data-product'>{product.price * product.qty}</span>
            </div>
        </div>
    )
}
