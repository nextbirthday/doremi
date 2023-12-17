import prisma from './prismaClient'

export const updateTodo = async () => {
  try {
    const result = await prisma.todo.update({
      where: {
        id: 9,
      },
      data: {
        todoText: 'Scarlett',
        completed: false,
      },
    })

    return result
  } catch (error) {
    return error
  }
}

export const updateTodos = async () => {
  try {
    const result = await prisma.todo.updateMany({
      where: {
        id: 7,
      },
      data: {
        todoText: 'Scarlett 7',
        completed: true,
      },

      where: {
        id: 8,
      },
      data: {
        todoText: 'solo 7',
        completed: true,
      },
    })

    return result
  } catch (error) {
    return error
  }
}
