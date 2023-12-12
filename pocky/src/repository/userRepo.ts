import { dbCon } from "@/repository/config"
import { Prisma, User } from "@prisma/client"

export const findByUserid = async (userid:string):Promise<User | null> => {
  return await dbCon.user.findUnique({
    where: {
      userid,
    },
  })
}

export const findById = async (id:string):Promise<User | null> => {
  return await dbCon.user.findUnique({
    where: {
      id,
    },
  })
}
export const create = async ({ name = process.env.DEFAULT_ADMIN_NAME, userid = process.env.DEFAULT_ADMIN_ID, password = process.env.DEFAULT_ADMIN_PW, grade = 1 }) => {
  try {
    const result = await dbCon.user.create({
      data: {
        name,
        userid,
        grade,
        password,
      },
    })
    return { userName: result.name, userid: result.userid, id: result.id, grade: result.grade }
  } catch (error:any) {
    //TODO: 에러 핸들링...
    if (error.code === 'P2002') {
      return { message: '이미 존재하는 ID입니다. 다시 시도해주세요' }
    }
    return { message: '올바르지 않은 값입니다. 다시 시도해주세요' }
  }
}

export const getTotalCount = async (getSearchParam: { where: any }) => {
  const { where } = getSearchParam
  return await dbCon.user.count({
    ...(where && { where: { ...where } }),
  })
}
