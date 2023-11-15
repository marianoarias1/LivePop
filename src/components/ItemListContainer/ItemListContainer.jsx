import React, { useEffect, useState } from 'react'
import './itemListContainerStyles.css'
import { Item } from '../item/Item'
import { useParams } from 'react-router-dom'
import { CarouselHome } from '../carousel/Carousel.jsx'
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore'


export const ItemListContainer = () => {
  const { artistname } = useParams();
  const [item, setItem] = useState([])

  useEffect(()=>{
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'products');

    if(artistname){
      const queryFilter= query(queryCollection, where('artistname', '==', artistname));
      getDocs(queryFilter).then((res)=> setItem(res.docs.map((e)=>({id: e.id, ...e.data()}))))

    }
    else{
      getDocs(queryCollection).then((res)=> setItem(res.docs.map((e)=>({id: e.id, ...e.data()}))))
    }

  }, [artistname])
  return (
    <>
      {
        !artistname ?
          <CarouselHome />
          :
          null
      }
      <main className='main-list-items'>
        <div className='title-container'>
          <h2>PRODUCTOS</h2>
        </div>
        <div className='product-container'>
          {
            artistname ?
            item.map((filteredProduct) => {
                if (filteredProduct.artistname === artistname) {
                  return <Item key={filteredProduct.id} product={filteredProduct} />
                }
              })
              :
              item.map((notFilteredProduct) => {
                return <Item key={notFilteredProduct.id} product={notFilteredProduct} />
              })
          }

        </div>
      </main>
    </>
  )
}
