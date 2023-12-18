import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/controller/userController';
/* 회원가입 */
export const POST = async (request: NextRequest) => {

    const bcrypt = require('bcrypt');

    const data = await request.json();

    /* 패스워드 암호화 */
    const PW = data.data.password;;
    const encryptedPW = bcrypt.hashSync(PW, 10);

    data.data.password = encryptedPW

    const submitData = {
        userid: data.data.userid,
        password: data.data.password,
        name: data.data.name,
        email: data.data.email
    }
    const result = await createUser(submitData);

    try {
        return NextResponse.json({ ...result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

};