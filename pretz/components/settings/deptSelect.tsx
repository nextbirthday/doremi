'use client'
import { Input, Select, Space } from 'antd'

const { Search } = Input

const options = [
  {
    value: '지란지교소프트',
    label: '지란지교소프트',
  },
  {
    value: '지란지교시큐리티',
    label: '지란지교시큐리티',
  },
  {
    value: '지란지교데이터',
    label: '지란지교데이터',
  },
  {
    value: '지란지교테크',
    label: '지란지교테크',
  },
  {
    value: '지란지교모빌리티',
    label: '지란지교모빌리티',
  },
]
const DeptSelect = ({ onChange }: any) => {
  console.log('DeptSelect ===>', onChange)
  return (
    <Space.Compact>
      <Select defaultValue="부서" options={options} style={{ width: '160px' }} onChange={onChange} />
      <Input placeholder="직급" style={{ width: '100px' }} />
    </Space.Compact>
  )
}

export default DeptSelect
