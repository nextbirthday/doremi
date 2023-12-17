import { NextRequest, NextResponse } from 'next/server'
import { queryData } from '../../../../utils/getQueryOutput'

export async function GET(request: NextRequest) {
  const queryOutput = await queryData()

  if (queryOutput) {
    try {
      return NextResponse.json({ ...queryOutput }, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
  }
}
