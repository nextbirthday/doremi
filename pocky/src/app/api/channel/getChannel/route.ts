import { getChannel } from '@/controller/channel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')

  try {
    const channel = await getChannel(name)
    return NextResponse.json({ ...channel }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
