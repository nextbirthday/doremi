import prisma from './prismaClient'

export const updateUser = async () => {
  try {
    const result = await prisma.user.update({
      where: {
        id: 6,
      },
      data: {
        validated: false,
        firstName: 'updated first name',
        lastName: 'updated last name',
      },
    })

    return result
  } catch (error) {
    return error
  }
}

export const updateUsers = async () => {
  try {
    const result = await prisma.user.updateMany({
      where: {
        lastName: {
          startsWith: 'Wise',
        },
      },
      data: {
        validated: false,
      },
    })
    return result
  } catch (error) {
    return error
  }
}
