import React from 'react'
import { getUserInfo } from '@/controller/userController'

const User = async () => {
  const userInfo = await getUserInfo('clq0juxu60000u2yd3a181gug')
  console.log('userInfo', userInfo)
  if (!userInfo) {
    return
  }
  return (
    <>
      <h1>User {`${userInfo.name}`}</h1>
    </>
  )
}

export default User
