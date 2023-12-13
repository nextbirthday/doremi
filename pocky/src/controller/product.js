import * as productRepository from '@/repository/product';

export const getProduct = async (code) => {

    const dbResult = await productRepository.findById(code);
    return dbResult;
};

export const getAllProduct = async () => {
    const dbResult = await productRepository.findMany()
    return dbResult
}