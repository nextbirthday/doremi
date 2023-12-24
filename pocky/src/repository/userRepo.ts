import { dbCon } from '@/repository/config'
import { User } from '@prisma/client'

export const findByUserid = async (userid: string): Promise<User | null> => {
  return await dbCon.user.findUnique({
    where: {
      userid,
    },
  })
}

export const findById = async (data: any): Promise<User | null> => {
  const id = data.data
  return await dbCon.user.findUnique({
    where: {
      id: id,
    },
  })
}

export const createUser = async (submitData: {
  userid: string
  password: string
  name: string
  birth: string
  email: string
  mobile: string
  gender?: string // gender가 선택적(optional)으로 추가됨
}) => {
  console.log('submitData', submitData)

  try {
    const userData: any = {
      name: submitData.name,
      userid: submitData.userid,
      password: submitData.password,
      email: submitData.email,
      birth: submitData.birth,
      mobile: submitData.mobile,
      grade: 1,
    }

    // gender가 존재할 경우에만 추가
    if (submitData.gender) {
      userData.gender = submitData.gender
    }

    const result = await dbCon.user.create({
      data: userData,
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
  console.log('signin', userid)
  const result = await dbCon.user.findUnique({
    where: {
      userid,
    },
  })
  console.log('signin result', result)

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
      name,
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
      email,
    },
  })
  return result
}
export const changeMobile = async (data: any) => {
  const { userid, mobile } = data.data
  const result = await dbCon.user.update({
    where: {
      userid,
    },
    data: {
      mobile,
    },
  })
  return result
}

export const changePassword = async (data: any) => {
  const { userid, password } = data.data
  const result = await dbCon.user.update({
    where: {
      userid,
    },
    data: {
      password,
    },
  })

  return result
}
