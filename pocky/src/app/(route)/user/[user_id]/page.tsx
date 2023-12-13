import { getUserInfo } from '@/controller/userController'
import React from 'react'

const UserDetail = async ({ params }: { params: { user_id: string } }) => {
  const userInfo = await getUserInfo(params.user_id)
  if (!userInfo) {
    return
  }
  return (
    <>
      <h1 className="text-4xl">Details about User </h1>
      <h1>id: {params.user_id}</h1>
      <h1>Hello, {`${userInfo.name}`}</h1>
    </>
  )
}

export default UserDetail
