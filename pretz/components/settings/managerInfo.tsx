'use client'
import { Row, Col, Button, Input, Space } from 'antd'
import { useState } from 'react'
import DeptSelect from './deptSelect'
import { Form, SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  name: string
  mobile: string
  department: string
  position: string
}

const ManagerInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const submitAction: SubmitHandler<Inputs> = async (data) => console.log('onSubmit data ===>', data)

  const [department, setDepartment] = useState('')

  const handleDepartment = (value: any) => {
    console.log('value ===>', value)
    setDepartment(value)
  }
  console.log(watch('email'))
  return (
    <div className="w-80 border-solid border-2 border-red-500 p-2 ">
      <form onSubmit={handleSubmit(submitAction)}>
        <p> 책임자 정보</p>
        <Space direction="vertical" className="p-2">
          <Input placeholder="이메일" />
          <Input placeholder="이름" />
          <Input placeholder="전화번호" />
          <DeptSelect onChange={handleDepartment} />
          <Input placeholder="직급" />
        </Space>
        <div style={{ borderWidth: '2px', borderColor: '#555', margin: '5px 0px 10px 0px' }} />
        <Row justify={'end'} gutter={20}>
          <Col>
            <Button type={'primary'} htmlType={'submit'} size={'large'}>
              submit
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default ManagerInfo
