import { CloseOutlined } from '@ant-design/icons'
import { Button, Divider, Form, Input, Select, SelectProps, Space } from 'antd'
import './changeMobile.css'

const options: SelectProps['options'] = []

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  })
}

const ChangeMobile = ({ handlePopupClose }: any) => {
  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`)
  }
  return (
    <div className="edit_wrap">
      <CloseOutlined onClick={handlePopupClose} style={{ float: 'right' }} />
      <h3>플랜아이님의 회원정보 중 전화번호 수정</h3>
      <Divider style={{ margin: '0.5rem 0 1rem 0' }} />
      <div className="form_wrap">
        <Form>
          <Space direction="vertical">
            <Space.Compact className="form_item nation">
              <Select defaultValue="a1" onChange={handleChange} options={options} />
            </Space.Compact>
            <Space.Compact className="form_item mobile">
              <Input placeholder="전화번호" />
              <Button type="primary" className="auth_button">
                인증
              </Button>
            </Space.Compact>
            <Space.Compact className="form_item auth_code">
              <Input placeholder="인증번호 입력" />
            </Space.Compact>
          </Space>
        </Form>
      </div>
      <div className="button_wrap">
        <button className="cancel_button" onClick={handlePopupClose}>
          <span className="cancel_text">취소</span>
        </button>
        <button className="change_button">
          <span className="change_text">변경</span>
        </button>
      </div>
    </div>
  )
}

export default ChangeMobile
