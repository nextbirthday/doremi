import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import { getAllProduct } from '@/controller/product'
import ProductList from './components/productList'

const Product = async () => {
  const productList = await getAllProduct()
  console.log('productList ===>', productList)

  return (
    <>
        <h1>Product List</h1>
        <ProductList productList={productList} />
    </>
  )
}

export default Product
