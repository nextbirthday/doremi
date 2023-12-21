'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { MdOutlineRateReview } from 'react-icons/md'
import './productItem.css'
const ProductItem = (product: any) => {
  const handleHeart = (event: any) => {
    event.preventDefault()
  }
  return (
    <ul className="product_section">
      <li className="product_detail">
        <div className="product_b">
          <Link href={`/products/${product.code}`}>
            <div className="image_box">
              <div className="product_image">
                <img src="/cutscene/BG_CS_S1Final_20.jpg" alt="상품이미지" style={{ width: '365.75px', height: '365.75px', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="info_box">
              <div className="product_brand">FILA</div>
              <div className="product_name">{product.name}</div>
              <div className="product_price">
                <span className="price_sale">
                  <span className="price_number">{product.price}</span>
                  <span className="price_unit">원</span>
                </span>
              </div>
              <div className="info_delivery">무료배송</div>
            </div>
          </Link>
          <div className="heart_area">
            <div className="heart_box">
              <button type="button" className="heart_icon" onClick={handleHeart}>
                <CiHeart />
              </button>
              <span className="heart_count">0</span>
              <Link href={`/product/${product.code}/reviews`}>
                <span className="review_icon">
                  <MdOutlineRateReview />
                </span>
                <span className="review_count">0</span>
              </Link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default ProductItem
