import { CloseOutlined } from '@ant-design/icons'
import { Button, Divider, Input, Popconfirm, Space, message } from 'antd'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import './changeName.css'

const ChangeName = ({ handlePopupClose }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    console.log('onSubmit data ===>', data)

    if (!confirm('확인(예) 또는 취소(아니오)를 선택해주세요.')) {
      return
    } else {
      const userData = {
        userid: 'webadm',
        name: data.name,
      }
      try {
        const response = await axios.post('/api/edit/changeName', {
          data: userData,
        })
        console.log('response ===>', response)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="edit_wrap">
      <CloseOutlined onClick={handlePopupClose} style={{ float: 'right' }} />
      <h3>플랜아이님의 회원정보 중 이름 수정</h3>
      <Divider style={{ margin: '0.5rem 0 1rem 0' }} />
      <div className="form_wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Space direction="vertical" className="space_form">
            <Space.Compact className="form_item name">
              <Controller name="name" control={control} render={({ field }) => <Input {...field} placeholder="이름" size="large" allowClear={true} required />} />
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

export default ChangeName
