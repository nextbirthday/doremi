import { CloseOutlined } from '@ant-design/icons'
import { Button, Divider, Input, Space } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import './changeEmail.css'
import axios from 'axios'
const ChangeEmail = ({ handlePopupClose }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    console.log('onSubmit data ===>', data)

    const userData = {
      userid: 'webadm',
      email: data.email,
    }
    try {
      const response = await axios.post('/api/edit/changeEmail', {
        data: userData,
      })
      console.log('response ===>', response)
    } catch (error) {
      console.log(error)
    }
  }
  const sendEmail = () => {
    console.log('sendEmail')
  }
  return (
    <div className="edit_wrap">
      <CloseOutlined onClick={handlePopupClose} style={{ float: 'right' }} />
      <h3>플랜아이님의 회원정보 중 이메일 수정</h3>
      <Divider style={{ margin: '0.5rem 0 1rem 0' }} />
      <div className="form_wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Space direction="vertical" className="space_form">
            <Space.Compact className="form_item mobile">
              <Controller name="email" control={control} render={({ field }) => <Input {...field} placeholder="이메일" size="large" allowClear={true} />} />
              <Button type="primary" className="auth_button" size="large" onClick={sendEmail}>
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

export default ChangeEmail
