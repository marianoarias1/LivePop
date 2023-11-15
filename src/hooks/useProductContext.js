import { useContext } from "react";
import { ProductContext } from "../Context/productContext";


export function useProductContext(){
    const context = useContext(ProductContext)
    if (!context){
        throw new Error('Error de contexto')
    }
    return context;
}