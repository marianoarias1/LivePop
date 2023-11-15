import React from 'react'
import '../CartPage/cartPageStyles.css'
import './cartListStyles.css'
import { BsTrash } from 'react-icons/bs'
import { useCartContext } from '../../hooks/useCartContext'

export const CartList = ({product, handleDelete}) => {
    const {handleDecrement, handleIncrement} = useCartContext();
    return (
        <>
            <div className='cart-item-container'>
                <div className='img-cart-item-container'>
                    <img src={product.src} alt="" />
                </div>

                <div className='name-cart-item-container'>
                    <h3>{product.name}</h3>
                </div>

                <div className='data-item-container'>
                    <div className='qty-prod-container'>
                        <button onClick={()=>{
                            handleIncrement(product)
                        }}>+</button>
                        <span className='qty-prod'>{product.qty}</span>
                        <button onClick={()=>{
                            handleDecrement(product)
                        }}>-</button>
                    </div>
                    <div className='price-prod-container'>
                        <span className='price-prod'>${product.price * product.qty}</span>
                    </div>
                </div>

                <div className='delete-item-container'>
                    <BsTrash className='delete-item' onClick={()=>handleDelete(product, product.qty)}></BsTrash>
                </div>
            </div>
        </>
    )
}
