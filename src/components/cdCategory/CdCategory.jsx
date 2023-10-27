import React from 'react'
import '../components/item/itemStyles.css'
import '../components/ItemListContainer/itemListContainerStyles.css'
import { products } from '../JSON/products'
import { useParams } from 'react-router-dom'
import { Item } from '../components/item/Item';

export const CdCategory = () => {
    const {categoryType} = useParams();
  return (
    <div className='main-list-items'>
        <div className='product-container'>
            {
                categoryType ? 
                products.map((category)=>{
                  if(category.type === categoryType){
                    console.log(category)
                    return <Item key={category.id} product={category}/>
                  }
                })
                :
                []
            }
        </div>
    </div>

  )
}
