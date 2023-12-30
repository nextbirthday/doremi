import { dbCon } from "@/repository/config"
import { Product } from "@prisma/client";

export const findById = async (code: string): Promise<Product | null> => {

    return await dbCon.product.findUnique({
        where: {
            code: code,
        },
    })
}

export const findMany = async () => {
    return await dbCon.product.findMany()
}

export const create = async (data: any) => {
    console.log('createProduct data ===>', data);

    if (!data) {
        console.log('데이터 없음');
    }
    const productData = data

    try {
        const result = await dbCon.product.create({
            data: productData
        })

        return result
    } catch (error) {
        return error
    }
}

export const update = async (data: any) => {
    console.log('updateProduct data ===>', data);

    if (!data) {
        console.log('데이터 없음');
    }
    const productData = data
    console.log('updateProduct productData ===>', productData);

    try {
        const result = await dbCon.product.update({
            where: {
                code: productData.code,
            },
            data: {
                name: productData.name,
                price: productData.price,
                stock: productData.stock,
                image: productData.image,
                isDelete: productData.isDelete
            },
        })

        return result
    } catch (error) {
        return error
    }
}
