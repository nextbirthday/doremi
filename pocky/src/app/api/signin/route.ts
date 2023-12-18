import { signin } from '@/controller/userController';
import { NextRequest, NextResponse } from 'next/server';
/* 로그인 */
export const POST = async (request: NextRequest) => {
    const bcrypt = require('bcrypt');

    const data = await request.json();
    const password = data.data.password

    const result = await signin(data);

    if (!result || !result.password) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const hashedPassword = result.password

    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    if (isValidPassword) {
        return NextResponse.json({ success: true }, { status: 200 });
    } else {
        return NextResponse.json({ success: false }, { status: 200 });
    }
};