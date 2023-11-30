import React from 'react'
import { Topic } from '../../../../types/interface'

export const revalidate = 0 // revalidate at most every hour

const Read = async (props: any) => {
  const response = await fetch(`http://localhost:9999/topics/${props.params.id}`)
  const topics: Topic = await response.json()
  return (
    <h2>
      {topics.title} <br />
      {topics.body}
    </h2>
  )
}

export default Read
