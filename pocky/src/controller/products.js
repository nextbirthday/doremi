import * as productsRepository from '@/repository/products'

export const getProduct = async (code) => {
  const dbResult = await productsRepository.findById(code)
  return dbResult
}

export const getAllProduct = async () => {
  const dbResult = await productsRepository.findMany()
  return dbResult
}

export const createProduct = async (data) => {
  const dbResult = await productsRepository.create(data)
  return dbResult
}

export const updateProduct = async (data) => {
  const dbResult = await productsRepository.update(data)
  return dbResult
}
