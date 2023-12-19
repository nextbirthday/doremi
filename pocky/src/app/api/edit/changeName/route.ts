import { changeName } from '@/controller/userController';
import { NextRequest, NextResponse } from 'next/server';

/* 회원정보수정 - 이름 */
export const POST = async (request: NextRequest) => {

    const data = await request.json();
    const result = await changeName(data);

    try {
        return NextResponse.json({ ...result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};