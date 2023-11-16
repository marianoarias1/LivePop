import React, { useState } from 'react'
import "./itemDetailStyles.css"
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../hooks/useCartContext';
import { outOfStock } from '../../Context/cartContext';

export const ItemDetail = ({product, onClose}) => {
    const {addToCart} = useCartContext();
    const [count, setCount] = useState(1);

    const addNewProduct=()=>{
        if(!product.stock || count > product.stock){
            outOfStock()
        }
        else{
            addToCart(product, count)
        }

    }

    const handleCountIncrement=()=>{
        if(count < product.stock){
            setCount(count + 1);
        }
        else{
            outOfStock();
        }
    }

    const handleCountDecrement=()=>{
        if(count > 1){
            setCount(count - 1)
        }
    }

    if(!product || product.length === 0){
        return null
    }
    else{
        return (
            <div className='item-detail-card-container'>

                <div className='close-detail-container'>
                    <Link to={`/`}>
                        <BsFillArrowLeftCircleFill onClick={onClose} className='close-detail'/>
                    </Link>
                </div>

                <div className='item-detail-data-container'>
                    <div className='item-detail-img-container'>
                        <img src={product.src} alt={product.name} />

                    </div>
        
                    <div className='item-detail-data'>
                        <div className='title-detail-container'>
                            <h2>{product.name}</h2>
                        </div>
        
                        <h2>{product.artist}</h2>
                        <span>${product.price}</span>
                        <button onClick={addNewProduct}>AGREGAR AL CARRITO</button>
        
                        <div className='btn-detail-container'>
                            <button onClick={handleCountIncrement}>+</button>
                            <span>{count}</span>
                            <button onClick={handleCountDecrement}>-</button>
                        </div>
    
                        <div className='songs-detail-container'>
                            <ol start="1">
                                {product.songs?.map((e)=>{
                                    return(
                                        <li key={product.id + Math.random() + 13}>{e}</li>
                                    )
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
