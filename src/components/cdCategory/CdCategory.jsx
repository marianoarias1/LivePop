import React, { useEffect, useState } from 'react'
import '../item/itemStyles.css'
import '../ItemListContainer/itemListContainerStyles.css'
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { Item } from '../item/Item';

export const CdCategory = () => {
  const { categoryType } = useParams();
  const [item, setItem] = useState([])

  useEffect(()=>{
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'products');

    if(categoryType){
      const queryFilter= query(queryCollection, where('type', '==', categoryType));
      getDocs(queryFilter).then((res)=> setItem(res.docs.map((e)=>({id: e.id, ...e.data()}))))

    }
    else{
      getDocs(queryCollection).then((res)=> setItem(res.docs.map((e)=>({id: e.id, ...e.data()}))))
    }

  }, [categoryType])

  return (
    <div className='main-list-items'>
      <div className='title-container'>
        <h2>PRODUCTOS</h2>
      </div>
      <div className='product-container'>
        {
          categoryType ?
          item.map((category) => {
              if (category.type === categoryType) {
                return <Item key={category.id} product={category} />
              }
            })
            :
            []
        }
      </div>
    </div>

  )
}
