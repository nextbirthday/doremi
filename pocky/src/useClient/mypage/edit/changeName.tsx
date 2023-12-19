import { Button, Col, Divider, Form, Input, Row, Select, Space } from 'antd'
import React from 'react'
import './changeName.css'
import { CloseOutlined } from '@ant-design/icons'

const options = [
  {
    value: '대한민국',
    label: '+82',
  },
  {
    value: '일본',
    label: '+81',
  },
]
const ChangeName = ({ handlePopupClose }: any) => {
  return (
    <div className="edit_wrap">
      <CloseOutlined onClick={handlePopupClose} style={{ float: 'right' }} />
      <h3>플랜아이님의 회원정보 중 이름 수정</h3>
      <Divider style={{ margin: '0.5rem 0 1rem 0' }} />
      <div className="form_wrap">
        <Form>
          <Space direction="vertical">
            <Space.Compact className="form_item name">
              <Input placeholder="이름" />
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

export default ChangeName
