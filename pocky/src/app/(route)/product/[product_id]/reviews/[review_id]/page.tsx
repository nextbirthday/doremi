import React from 'react'
import { notFound } from 'next/navigation'
const ReviewDetail = ({ params }: { params: { product_id: string; review_id: string } }) => {
  if (parseInt(params.review_id) > 1000) {
    notFound()
  }

  return (
    <h1 className="text-5xl">
      Review {params.review_id} for product {params.product_id}
    </h1>
  )
}

export default ReviewDetail
