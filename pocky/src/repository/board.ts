import { dbCon } from '@/repository/config'

export const createBoard = async (data: any) => {
  const { title, content } = data.data
  try {
    const result = await dbCon.board.create({
      data: {
        title,
        content,
      },
    })

    return result
  } catch (error) {
    return error
  }
}
