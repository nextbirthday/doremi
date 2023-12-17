import prisma from './prismaClient'

export const createTodo = async () => {
  const todoData = {
    todoText: 'DELETE ROWS',
    completed: false,
    userId: 16,
  }
  try {
    const results = await prisma.todo.create({
      data: todoData,
    })

    return results
  } catch (error) {}
  return 'data'
}
