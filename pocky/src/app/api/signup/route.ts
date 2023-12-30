import { NextRequest, NextResponse } from 'next/server'
import { createUser } from '@/controller/userController'
/* 회원가입 */
export const POST = async (request: NextRequest) => {
  const bcrypt = require('bcrypt')

  const data = await request.json()
  console.log('data.data', data.data)
  /* 패스워드 암호화 */
  const PW = data.data.password
  const encryptedPW = bcrypt.hashSync(PW, 10)

  data.data.password = encryptedPW

  const submitData: {
    userid: string
    password: string
    name: string
    birth: string
    email: string
    mobile: string
    gender?: string // gender가 선택적(optional)으로 추가됨
  } = {
    userid: data.data.userid,
    password: data.data.password,
    name: data.data.name,
    birth: data.data.birth,
    email: data.data.email,
    mobile: data.data.mobile,
  }

  // gender가 존재할 경우에만 추가
  if (data.data.gender) {
    submitData.gender = data.data.gender
  }

  const result = await createUser(submitData)

  try {
    return NextResponse.json({ ...result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
