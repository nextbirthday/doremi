import { signJwtAccessToken } from "@/library/jwt";
import { dbCon } from "@/repository/config";

interface RequestBody {
    email: string;
    userid: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json();
    const bcrypt = require('bcrypt');

    console.log('LOGIN BODY ===>', body);
    console.log('=====================================');
    const user = await dbCon.user.findFirst({
        where: {
            email: body.email,
        },
    })

    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithoutPass } = user
        console.log('user ===>', user);
        console.log('=====================================');
        const accessToken = signJwtAccessToken(userWithoutPass)

        const result = {
            ...userWithoutPass,
            accessToken
        }



        return new Response(JSON.stringify(result))
    } else return new Response(JSON.stringify(null))
}