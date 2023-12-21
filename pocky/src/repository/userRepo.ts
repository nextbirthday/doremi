import { dbCon } from "@/repository/config"
import { User } from "@prisma/client"

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
export const signin = async ({ userid }: any) => {

  const result = await dbCon.user.findFirst({
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

export const changeName = async (data: any) => {
  const { userid, name } = data.data
  const result = await dbCon.user.update({
    where: {
      userid,
    },
    data: {
      name
    },
  })
  return result
}

export const changeEmail = async (data: any) => {
  const { userid, email } = data.data
  const result = await dbCon.user.update({
    where: {
      userid,
    },
    data: {
      email
    },
  })
  return result
}
// export const changeMobile = async (data: any) => {
//   const { userid, mobile } = data.data
//   const result = await dbCon.user.update({
//     where: {
//       userid,
//     },
//     data: {
//       mobile
//     },
//   })
//   return result
// }