import * as channelRepository from '@/repository/channel'

export const getAllChannel = async () => {
  const dbResult = await channelRepository.getAllChannel()
  return dbResult
}
export const getChannel = async (slug: any) => {
  const dbResult = await channelRepository.getChannel(slug)
  return dbResult
}
