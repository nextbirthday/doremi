'use client'
import { Button, Col, Divider, Input, Row, Select, Space } from 'antd'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { dividerMargin } from './site'
import FormMessage from '@/app/components/form/formMessage'

type Inputs = {
  email: string
  name: string
  phone: string
  department: string
  position: string
}
const deptOptions = [
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

const ManagerInfo = () => {
  const paddingTop = '4px'
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const submitAction: SubmitHandler<Inputs> = async (data) => console.log('ManagerInfo data ===>', data)

  return (
    <div className="w-80 border-solid border-2 border-red-500 p-2 ">
      <form onSubmit={handleSubmit(submitAction)}>
        <p style={{ textAlign: 'center' }}>Manager Information</p>
        <Space direction="vertical" className="p-2" style={{ width: '300px' }}>
          <Divider style={{ margin: dividerMargin }} />
          <Row style={{ justifyContent: 'space-between' }}>
            <Col span={4} style={{ paddingTop: paddingTop }}>
              <span>E-mail:</span>
            </Col>
            <Col span={19}>
              <Controller control={control} name="email" rules={{ required: 'Required!' }} render={({ field }) => <Input {...field} placeholder={'enter email'} />} />

              {errors.email?.message && <FormMessage msg={errors.email.message} />}
            </Col>
          </Row>{' '}
          <Divider style={{ margin: dividerMargin }} />
          <Row style={{ justifyContent: 'space-between' }}>
            <Col span={4} style={{ paddingTop: paddingTop }}>
              <span>Name:</span>
            </Col>
            <Col span={19}>
              <Controller control={control} name="name" rules={{ required: 'Required!' }} render={({ field }) => <Input {...field} placeholder={'enter name'} />} />

              {errors.name?.message && <FormMessage msg={errors.name.message} />}
            </Col>
          </Row>{' '}
          <Divider style={{ margin: dividerMargin }} />
          <Row style={{ justifyContent: 'space-between' }}>
            <Col span={4} style={{ paddingTop: paddingTop }}>
              <span>phone:</span>
            </Col>
            <Col span={19}>
              <Controller control={control} name="phone" rules={{ required: 'Required!' }} render={({ field }) => <Input {...field} placeholder={'enter phone number'} />} />

              {errors.phone?.message && <FormMessage msg={errors.phone.message} />}
            </Col>
          </Row>{' '}
          <Divider style={{ margin: dividerMargin }} />
          <Row>
            <Col span={5} style={{ paddingTop: paddingTop }}>
              <span>Dept:</span>
            </Col>
            <Col span={19}>
              <Controller
                control={control}
                name={'department'}
                rules={{ required: 'Required!' }}
                render={({ field }) => (
                  <Select
                    showSearch
                    style={{ width: 224.38 }}
                    placeholder={deptOptions[0].label}
                    onChange={(data) => {
                      data && field.onChange(data)
                    }}
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    options={deptOptions}
                  />
                )}
              />
              {errors.department?.message && <FormMessage msg={errors.department.message} />}
            </Col>
          </Row>{' '}
          <Divider style={{ margin: dividerMargin }} />
          <Row style={{ justifyContent: 'space-between' }}>
            <Col span={4} style={{ paddingTop: paddingTop }}>
              <span>Position:</span>
            </Col>
            <Col span={19}>
              <Controller control={control} name="position" rules={{ required: 'Required!' }} render={({ field }) => <Input {...field} placeholder={'enter position'} />} />

              {errors.position?.message && <FormMessage msg={errors.position.message} />}
            </Col>
          </Row>{' '}
          <Divider style={{ margin: dividerMargin }} />
          <Row justify={'end'} gutter={20}>
            <Col>
              <Button type={'primary'} htmlType={'submit'}>
                Submit
              </Button>
            </Col>
          </Row>
        </Space>
      </form>
    </div>
  )
}

export default ManagerInfo
