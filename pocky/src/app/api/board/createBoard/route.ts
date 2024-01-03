import { NextRequest, NextResponse } from 'next/server'
import { createBoard } from '@/controller/board'
/* 회원정보수정 - 전화번호 */
export const POST = async (request: NextRequest) => {
  const data = await request.json()
  const result = await createBoard(data)

  try {
    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
