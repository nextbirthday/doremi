import React from 'react'
import ProductItem from './productItem'
import './productList.css'
const ProductList = ({ productList }: any) => {
  console.log('ProductList component ===>', productList)

  return (
    <div className="product_grid">
      {productList.map((product: any, index: any) => (
        <ProductItem key={index} {...product} />
      ))}
    </div>
  )
}

export default ProductList
