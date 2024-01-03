import { dbCon } from '@/repository/config'
export const createBoard = async (data: any) => {
  const { title, content, author, channelId } = data.data
  console.log('data.data', data.data)

  try {
    const result = await dbCon.board.create({
      data: {
        title,
        content,
        author: {
          connect: { userid: author },
        },
        channel: {
          connect: { id: channelId },
        },
        views: 0,
        rate: 0,
      },
    })

    return result
  } catch (error) {
    console.error('Prisma Error:', error)
    return error
  }
}
