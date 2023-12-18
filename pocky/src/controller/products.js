import * as productRepository from '@/repository/product'

export const getProduct = async (code) => {
  const dbResult = await productRepository.findById(code)
  return dbResult
}

export const getAllProducts = async () => {
  const dbResult = await productRepository.findMany()
  return dbResult
}

export const createProduct = async (data) => {
  const dbResult = await productRepository.create(data)
  return dbResult
}

export const updateProduct = async (data) => {
  const dbResult = await productRepository.update(data)
  return dbResult
}
