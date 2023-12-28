import * as userRepository from '@/repository/userRepo'
import { compare } from 'bcryptjs'

export const getUserInfo = async (data) => {
  const dbResult = await userRepository.findById(data)
  return dbResult
}

export const createUser = async (submitData) => {
  const result = await userRepository.createUser(submitData)
  return result
}

export const signin = async (data) => {
  const result = await userRepository.signin(data)
  return result
}
/* user 이름 변경 */
export const changeName = async (data) => {
  const result = await userRepository.changeName(data)
  return result
}

/* user 이메일 변경 */
export const changeEmail = async (data) => {
  const result = await userRepository.changeEmail(data)
  return result
}

/* user 전화번호 변경 */
export const changeMobile = async (data) => {
  const result = await userRepository.changeMobile(data)
  return result
}

/* user 비밀번호 변경 */
export const changePassword = async (data) => {
  const bcrypt = require('bcrypt')

  /* 패스워드 암호화 */
  const encryptedPW = bcrypt.hashSync(data.data.password, 10)
  data.data.password = encryptedPW
  const result = await userRepository.changePassword(data)
  return result
}

export const doUserLogin = async ({ userid, pw }) => {
  const user = await userRepository.signin({ userid })

  if (!user || !pw) return null

  const isPwValid = await compare(pw, user.password)

  if (isPwValid) return user
  else return null
}

// export const getUsers = async ({ where }, pageInfo) => {
//   const getSearchParam = {
//     ...(where && { where: { ...where } }),
//     select: {
//       id: true,
//       name: true,
//       userid: true,
//       grade: true,
//       isDelete: true,
//       createAt: true,
//     },
//   };
//
//   const totalData = await userRepository.getTotalCount(getSearchParam);
//   const dbResult = await userRepository.getAll(getSearchParam, pageInfo);
//   // const handleResult = handleArrayValue(dbResult, { key: 'grade', handleText: userGradeToText, returnKey: 'gradeText' })
//   // return { dataList: handleResult, pageInfo: { ...pageInfo, totalData: totalData } }
//   return { dataList: dbResult, pageInfo: { ...pageInfo, totalData: totalData } };
// };
