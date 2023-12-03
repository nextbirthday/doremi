'use client'
import FormMessage from '@/common/components/settings/formMessage'
import { Button, Col, Divider, Input, Row, Space } from 'antd'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  description: string
}
const SiteInformation = () => {
  const dividerMargin = '0.3rem 0 0.3rem 0'
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const submitAction: SubmitHandler<Inputs> = async (data) => console.log('SiteInformation data ===>', data)
  return (
    <div className="w-80 border-solid border-2 border-red-500 p-2">
      <form onSubmit={handleSubmit(submitAction)}>
        <p style={{ textAlign: 'center' }}>사이트 정보</p>
        <Space direction="vertical" className="p-2" style={{ width: '300px' }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Col span={4} style={{ paddingTop: '4px' }}>
              <span>E-mail:</span>
            </Col>
            <Col span={19}>
              <Controller control={control} name="name" rules={{ required: 'Required!' }} render={({ field }) => <Input {...field} placeholder={'enter site name'} />} />

              {errors.name?.message && <FormMessage msg={errors.name.message} />}
            </Col>
          </Row>
          <Divider style={{ margin: dividerMargin }} />
          <Row align={'middle'}>
            <Col span={4}>
              <span>Desc:</span>
            </Col>
            <Col span={19}>
              <Controller
                control={control}
                name={'description'}
                rules={{ required: 'Required!' }}
                render={({ field }) => <Input.TextArea {...field} showCount rows={3} placeholder={`Enter Description.`} style={{ resize: 'none' }} />}
              />
              {errors.description?.message && <FormMessage msg={errors.description.message} />}
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

export default SiteInformation
