import { verifyJwt } from "@/library/jwt";
import { dbCon } from "@/repository/config"
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } },) {

    const accessToken = request.headers.get('authorization')

    if (!accessToken || !verifyJwt(accessToken)) {
        return NextResponse.json({ error: 'No Authorization' }, { status: 401 })
    }


    /*  Prisma Model에서 Post Table id는 Int 타입이기 때문에 형 변환 필요. */
    console.log(params)
    const id = params.id

    const userPosts = await dbCon.post.findMany({
        where: {
            authorId: id
        },
        include: {
            author: {
                select: {
                    name: true,
                    userid: true,
                    email: true,
                    createAt: true,
                }
            }
        }

    })

    return NextResponse.json({ ...userPosts }, { status: 200 });
}