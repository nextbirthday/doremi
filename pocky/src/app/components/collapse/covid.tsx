'use client'
import { CaretRightOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'

const Covid = () => {
  const label = 'This panel can only be collapsed by clicking textasdasd'
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
  return (
    <>
      <Collapse
        expandIconPosition="end"
        collapsible="header"
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        items={[
          {
            key: '1',
            label,
            children: (
              <span>
                {text} <AiOutlineCheckCircle style={{ display: 'inline' }} />
              </span>
            ),
          },
        ]}
      />
    </>
  )
}

export default Covid
