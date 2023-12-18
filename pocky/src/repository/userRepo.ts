import { dbCon } from "@/repository/config"
import { Prisma, User } from "@prisma/client"

export const findByUserid = async (userid: string): Promise<User | null> => {
  return await dbCon.user.findUnique({
    where: {
      userid,
    },
  })
}

export const findById = async (id: string): Promise<User | null> => {

  console.log('user repository findById ===>', id);

  return await dbCon.user.findUnique({
    where: {
      id: id,
    },
  })
}

/* 회원가입 */
export const createUser = async (submitData: any) => {

  console.log('userRepo createUser ===>', submitData);
  //console.log(submitData.data.userid);
  try {
    const result = await dbCon.user.create({
      data: {
        name: submitData.name,
        userid: submitData.userid,
        password: submitData.password,
        email: submitData.email,
        grade: 1,
      },
    })
    return result
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { message: 'ID중복' }
    }
    return { message: '회원가입 과정에서 오류가 발생했습니다. 다시 시도해주세요.' }
  }
}

/* 로그인 */
export const signin = async (data: any) => {

  const { userid } = data.data

  const result = await dbCon.user.findUnique({
    select: {
      userid: true,
      password: true,
    },
    where: {
      userid,
    },
  })
  return result
}

export const getTotalCount = async (getSearchParam: { where: any }) => {
  const { where } = getSearchParam
  return await dbCon.user.count({
    ...(where && { where: { ...where } }),
  })
}

