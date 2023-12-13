import { NextRequest, NextResponse } from 'next/server';
import { getUserInfo } from '@/controller/userController';

export const GET = async (request: NextRequest) => {

  /* Get parameters */
  /*   const id = request.nextUrl.searchParams.get("id")
    console.log('id ===>', id); */

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const userInfo = await getUserInfo(id)
  console.log('GET userInfo', userInfo)

  try {
    return NextResponse.json({ ...userInfo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};


/* export async function POST(request: Request) {
  const userInfo = await getUserInfo('clq0juxu60000u2yd3a181gug')
  console.log('POST userInfo', userInfo)
  return NextResponse.json({ ...userInfo });
}
 */