import { Tag } from 'antd'
import React from 'react'

const NewvisitItem = ({ tagName }: any) => {
  return (
    <Tag bordered={true} closable>
      {tagName}
    </Tag>
  )
}

export default NewvisitItem
