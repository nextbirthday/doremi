import { dbCon } from '@/repository/config'

export const getAllChannel = async () => {
  return await dbCon.channel.findMany()
}

export const getChannel = async (name: any) => {
  const result = await dbCon.channel.findMany({
    where: {
      name,
    },
  })
  return result
}
