import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../components/Products/Products'


const Passing = () => {
  const item = useSelector((state)=>state.featureProducts)

  console.log(item)
  return (
    <>
    {
      item.map((product )=>{
        return  <Products key={product.id} {...product}/>


      })
    }
    </>
  )
}

export default Passing