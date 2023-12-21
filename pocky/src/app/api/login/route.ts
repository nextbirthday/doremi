import { signJwtAccessToken } from "@/library/jwt";
import { dbCon } from "@/repository/config";
import {compare} from 'bcryptjs'
import { doUserLogin } from "@/controller/userController";
import { NextResponse } from "next/server";

interface RequestBody {
    email: string;
    userid: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json();
    const {userid,password} = body
    // const bcrypt = require('bcrypt');

    const dbRes = await doUserLogin({userid,pw:password})

    if (dbRes) {
        return NextResponse.json({ userInfo: {...dbRes} }, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Fuck you~' }, { status: 500 });
    }

    // const user = await dbCon.user.findFirst({
    //     where: {
    //         userid: body.userid,
    //     },
    // })

    // if (user && user.password && (await compare(body.password, user.password))) {
    //     const { password, ...userWithoutPass } = user
    //     const accessToken = signJwtAccessToken(userWithoutPass)
    //     const result = {
    //         ...userWithoutPass,
    //         accessToken
    //     }

    //     return new Response(JSON.stringify(result))
    // } else return new Response(JSON.stringify(null))
}



