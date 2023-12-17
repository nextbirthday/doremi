import prisma from './prismaClient'

export const createUser = async () => {
  try {
    const results = await prisma.user.create({
      data: {
        firstName: 'Web Dev',
        lastName: 'Wise',
        validated: false,
      },
    })

    return results
  } catch (error) {}
  return 'data'
}

export const createUsers = async () => {
  const usersData = [
    {
      firstName: 'michael',
      lastName: 'jordan',
      validated: true,
    },
    {
      firstName: 'LeBron',
      lastName: 'james',
      validated: true,
    },
    {
      firstName: 'joe',
      lastName: 'dumars',
      validated: true,
    },
  ]
  try {
    const results = await prisma.user.createMany({
      data: usersData,
    })

    return results
  } catch (error) {}
  return 'data'
}

export const createUserWithTodo = async () => {
  const userDataWithTodo = {
    firstName: 'michael',
    lastName: 'jordan',
    validated: true,
    todo: {
      create: [
        {
          todoText: 'NBA FINALS MVP',
          completed: true,
        },
      ],
    },
  }
  try {
    const results = await prisma.user.create({
      data: userDataWithTodo,
      include: {
        todo: true,
      },
    })

    return results
  } catch (error) {}
  return 'data'
}
