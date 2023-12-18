import React from 'react'
import { queryData } from '../../../utils/getQueryOutput'
import { createUser, createUsers, createUserWithTodo } from '../../../utils/createUser'
import { createTodo } from '../../../utils/createTodo'
import { updateUser, updateUsers } from '../../../utils/updateUser'
import { updateTodo, updateTodos } from '../../../utils/updateTodo'

const QueryOutput = async ({ searchParams }: any) => {
  //   console.log('QueryOutput searchParams ===>', searchParams)
  //   const queryOutput = await queryData(searchParams.query)

  //   console.log('QueryOutput data ===>', queryOutput)

  // const createUserResult = await createUser()
  // console.log('QueryOutput createUserResult ===>', createUserResult)
  //const createUsersResult = await createUsers()
  //console.log('QueryOutput createUsersResult ===>', createUsersResult)

  //const createUserWithTodoResult = await createUserWithTodo()
  //console.log('QueryOutput createUserWithTodoResult ===>', createUserWithTodoResult)

  //const createTodoResult = await createTodo()
  // console.log('QueryOutput createTodoResult ===>', createTodoResult)

  // const updateUserResult = await updateUser()
  // console.log('QueryOutput updateUserResult ===>', updateUserResult)

  //const updateUsersResult = await updateUsers()
  //console.log('QueryOutput updateUsersResult ===>', updateUsersResult)

  // const updateTodoResult = await updateTodo()
  //  console.log('QueryOutput updateTodoResult ===>', updateTodoResult)

  //const updateTodosResult = await updateTodos()
  //console.log('QueryOutput updateTodosResult ===>', updateTodosResult)
  return <h1>page</h1>
}

export default QueryOutput
