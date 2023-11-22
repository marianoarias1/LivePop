import { createContext, useState } from "react";
import { outOfStock } from "../Functions/popupFunctions";

export const cartContext= createContext();


export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const stockDecrement= (product, count)=>{
        if(count <= product.stock){
            product.stock -= count
        }
    }

    const stockIncrement=(product, count)=>{
        product.stock += count
    }

    const addToCart=(product, count)=>{
        const findProdInCart= cart.find((e)=> e.id === product.id)
        if(findProdInCart){
            findProdInCart.qty += count
            stockDecrement(product, count)
            setCart([...cart])
        }
        else{
            stockDecrement(product, count)
            setCart([...cart, {...product, qty: count}])
        }

    }

    const qtyProd=()=>{
        return cart.reduce((acc, current) => acc + current.qty, 0)
    }


    const handleIncrement= (product)=>{
        if(product.stock >= 1){
            product.qty += 1 
            stockDecrement(product, 1)
            setCart([...cart])
        }
        else{
            outOfStock()
        }

    }

    const handleDecrement = (product)=>{
        if(product.qty > 1){
            product.qty -= 1
            stockIncrement(product, 1)
            setCart([...cart])
        }
        else{
            removeToCart(product, product.qty)
        }

    }

    const removeToCart=(product,qty)=>{
        const newCart= cart.filter((e)=> e.id !== product.id)
        stockIncrement(product, qty)
        setCart(newCart)
    }

    const clearCart = ()=>{
        setCart([])
    }
    return (
        <cartContext.Provider value={{cart,setCart, addToCart, qtyProd, removeToCart, handleIncrement, handleDecrement, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}