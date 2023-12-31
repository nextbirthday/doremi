import { getAllProduct, getProduct } from '@/controller/products'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  if (code) {
    const productList = await getProduct(code)

    try {
      return NextResponse.json({ ...productList }, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
  }

  const productList = await getAllProduct()
  try {
    return NextResponse.json({ ...productList }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
