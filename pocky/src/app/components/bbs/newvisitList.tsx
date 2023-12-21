import { Tag } from 'antd'
import React from 'react'
import NewvisitItem from './newvisitItem'

const NewvisitList = () => {
  const tagNames = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']

  return (
    <>
      <>
        {tagNames.map((tagName, index) => (
          <NewvisitItem key={index} tagName={tagName} />
        ))}
      </>
    </>
  )
}

export default NewvisitList
