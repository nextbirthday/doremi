import * as boardRepository from '@/repository/board'

export const createBoard = async (data: any) => {
  const dbResult = await boardRepository.createBoard(data)

  return dbResult
}
