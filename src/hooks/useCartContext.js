import { useContext } from "react"
import { cartContext } from "../Context/cartContext"


export const useCartContext =()=>{
    return useContext(cartContext);
}