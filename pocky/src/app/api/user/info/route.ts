import { getUserInfo } from '@/controller/userController'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: NextRequest) => {
  const data = await request.json()

  const result = await getUserInfo(data)

  if (result) {
    return NextResponse.json({ result }, { status: 200 })
  } else {
    return NextResponse.json({ message: '시스템… 정지…' }, { status: 200 })
  }
}
