import ProductMenu from '@/app/components/product/productMenu'
import { getAllProducts } from '@/controller/products'
import ProductList from './components/productList'

const Products = async () => {
  const productList = await getAllProducts()

  /* 외부 API 연동이 필요할 시 */
  /*   const staticData = await fetch('http://localhost:3000/api/product', {
    cache: 'no-store',
    headers: { 'content-type': 'application/json' },
  })

  const jsonData = await staticData.json()
  console.log('jsonData ===>', jsonData) */

  return (
    <>
      <h1>Product List</h1>
      <div style={{ display: 'flex' }}>
        <ProductMenu />
        <ProductList productList={productList} />
      </div>
    </>
  )
}

export default Products
