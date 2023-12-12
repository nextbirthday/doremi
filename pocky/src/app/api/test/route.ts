import { NextResponse } from 'next/server';
import { getUserInfo } from '@/controller/userController';

export const GET = async (req: Request) => {

  const userInfo = await getUserInfo('clq0juxu60000u2yd3a181gug')
  console.log('userInfo',userInfo)

  return NextResponse.json({...userInfo});
};