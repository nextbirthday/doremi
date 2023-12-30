import { dbCon } from '@/repository/config'

interface RequestBody {
  userid: string
  name: string
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()
  const bcrypt = require('bcrypt')

  const user = await dbCon.user.create({
    data: {
      userid: body.userid,
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10), // 바뀐 부분
    },
  })

  const { password, ...result } = user
  return new Response(JSON.stringify(result))
}
