import { dbCon } from "@/repository/config"
import { Product } from "@prisma/client";

export const findById = async (code: string): Promise<Product | null> => {

    return await dbCon.product.findUnique({
        where: {
            code,
        },
    })
}

export const findMany = async () => {
    return await dbCon.product.findMany()
}