import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import { getAllProduct } from '@/controller/product'
import ProductList from './components/productList'
import ProductMenu from '@/app/components/menu/productMenu'

const Product = async () => {
  const productList = await getAllProduct()
  console.log('productList ===>', productList)

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

export default Product
