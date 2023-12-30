import { getAllChannel } from '@/controller/channel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const channelList = await getAllChannel()

  try {
    return NextResponse.json({ ...channelList }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
