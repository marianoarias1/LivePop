import {useState, useMemo, createContext, useContext} from "react";

export const ProductContext = createContext();

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
