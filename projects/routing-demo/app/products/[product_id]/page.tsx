import React from 'react'

const ProductDetail = ({ params }: { params: { product_id: string } }) => {
  return (
    <>
      <h1>Details about product {params.product_id}</h1>
    </>
  )
}

export default ProductDetail
