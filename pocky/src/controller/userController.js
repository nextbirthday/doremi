import * as userRepository from '@/repository/userRepo';

export const getUserInfo = async (id) => {

  const dbResult = await userRepository.findById(id);
  return dbResult;
};

export const createUser = async (submitData) => {

  const result = await userRepository.createUser(submitData)
  return result
}

export const signin = async (data) => {
  const result = await userRepository.signin(data)
  return result
}

export const changeName = async (data) => {
  const result = await userRepository.changeName(data)
  return result
}

export const changeEmail = async (data) => {
  const result = await userRepository.changeEmail(data)
  return result
}

export const changeMobile = async (data) => {
  const result = await userRepository.changeMobile(data)
  return result
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