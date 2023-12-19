import { CloseOutlined } from '@ant-design/icons'
import { Button, Divider, Input, Select, Space } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import './changeMobile.css'
import axios from 'axios'

const options = [
  { value: 'a1', label: 'Option 1' },
  { value: 'a2', label: 'Option 2' },
]
const ChangeMobile = ({ handlePopupClose }: any) => {
  const { Option } = Select
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    console.log('onSubmit data ===>', data)

    const userData = {
      userid: 'webadm',
      mobile: data.mobile,
    }
    try {
      const response = await axios.post('/api/changeMobile', {
        data: userData,
      })
      console.log('response ===>', response)
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (value: any) => {
    // Handle select change
    console.log('Selected value:', value)
  }

  return (
    <div className="edit_wrap">
      <CloseOutlined onClick={handlePopupClose} style={{ float: 'right' }} />
      <h3>플랜아이님의 회원정보 중 전화번호 수정</h3>
      <Divider style={{ margin: '0.5rem 0 1rem 0' }} />
      <div className="form_wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Space direction="vertical" className="space_form">
            <Space.Compact className="form_item nation">
              <Controller
                name="nation"
                control={control}
                render={({ field }) => (
                  <Select {...field} placeholder="국가번호" size="large" allowClear={true} onChange={handleChange} style={{ width: '100%' }}>
                    {options.map((option) => (
                      <Option key={option.value} value={option.value}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>
                )}
              />
            </Space.Compact>
            <Space.Compact className="form_item mobile">
              <Controller name="mobile" control={control} render={({ field }) => <Input {...field} placeholder="전화번호" size="large" allowClear={true} />} />
              <Button type="primary" className="auth_button" size="large">
                인증
              </Button>
            </Space.Compact>
            <Space.Compact className="form_item auth_code">
              <Controller name="auth_code" control={control} render={({ field }) => <Input {...field} placeholder="인증번호 입력" size="large" allowClear={true} />} />
            </Space.Compact>
          </Space>
          <div className="button_wrap">
            <button type="button" className="cancel_button" onClick={handlePopupClose}>
              <span className="cancel_text">취소</span>
            </button>
            <button className="change_button" type="submit">
              <span className="change_text">변경</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangeMobile
