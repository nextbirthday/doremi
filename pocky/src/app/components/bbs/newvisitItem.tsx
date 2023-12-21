import { Tag } from 'antd'
import React from 'react'

const NewvisitItem = ({ tagName }: any) => {
  console.log('NewvisitItem ===>', { tagName })
  return (
    <Tag bordered={false} closable>
      {tagName}
    </Tag>
  )
}

export default NewvisitItem
