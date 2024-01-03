import { dbCon } from '@/repository/config'

export const getAllChannel = async () => {
  return await dbCon.channel.findMany()
}

export const getChannel = async (slug: any) => {
  const result = await dbCon.channel.findMany({
    where: {
      slug,
    },
  })
  return result
}
