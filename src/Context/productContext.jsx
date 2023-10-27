import React, {useState, useMemo} from "react";

const ProductContext = React.createContext();

export function ProductProvider(props){
    const [showDetail, setShowDetail] = useState([]);

    const value= useMemo(()=>{
        return({
            showDetail,
            setShowDetail,
        })
    },[showDetail, setShowDetail])

    return <ProductContext.Provider value={value} {...props}/>
}

export function useProduct(){
    const context = React.useContext(ProductContext)
    if (!context){
        throw new Error('Error de contexto')
    }
    return context;
}