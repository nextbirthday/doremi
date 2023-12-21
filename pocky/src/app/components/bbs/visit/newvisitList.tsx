import { Empty, Tag } from 'antd'
import React from 'react'
import NewvisitItem from './newvisitItem'

const NewvisitList = () => {
  const tagNames = ['Tag 112312321321', 'Tag 2421421421421', 'Tag 41242142142143', 'Tag 124214124214']

  return (
    <>
      <>{tagNames.length < 1 ? <Empty /> : tagNames.map((tagName, index) => <NewvisitItem key={index} tagName={tagName} />)}</>
    </>
  )
}

export default NewvisitList
