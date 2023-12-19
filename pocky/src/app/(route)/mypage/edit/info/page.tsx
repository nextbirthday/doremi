'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'
import { Divider, Switch } from 'antd'
import './edituser.css'
import DefaultLayer from '@/app/components/layer/defaultLayer'
import DefaultPopupPanel from '@/app/components/panels/dafaultPopupPanel'
import ChangeName from '@/useClient/mypage/edit/changeName'
import ChangeMobile from '@/useClient/mypage/edit/changeMobile'
import ChangeEmail from '@/useClient/mypage/edit/changeEmail'
const EditUser = () => {
  const [layerType, setLayerType] = useState('')
  const [layerPopupOpen, setLayerPopupOpen] = useState(false)

  const changeName = () => {
    setLayerType('changeName')
    setLayerPopupOpen(true)
  }
  const changeMobile = () => {
    setLayerType('changeMobile')
    setLayerPopupOpen(true)
  }
  const changeEmail = () => {
    setLayerType('changeEmail')
    setLayerPopupOpen(true)
  }

  const onOverseaChange = () => {}

  const onLocationChange = () => {}

  /* 솔루션 INSERT pop-up close */
  const handlePopupClose = () => {
    setLayerPopupOpen(false)
    //location.reload()
  }
  return (
    <>
      <section className="edit_header">
        <h2 className="edit_title">회원 정보 수정</h2>
      </section>
      <section className="profile">
        <div className="account_box">
          <Link className="title" href="/">
            <h2 className="title_text">내프로필</h2>
          </Link>

          <ul className="account_row">
            <li>
              <div className="row_item name">
                <span className="item_text">
                  <span className="item_icon">
                    <FaRegUser />
                  </span>
                  플랜아이
                </span>
                <button type="button" className="button_edit" onClick={changeName}>
                  <span className="text">실명수정</span>
                </button>
              </div>
            </li>
            <Divider style={{ margin: 0 }} />

            <li>
              <div className="row_item mobile">
                <span className="item_text">
                  <span className="item_icon">
                    <FaRegUser />
                  </span>
                  010-1234-1244
                </span>
                <button type="button" className="button_edit" onClick={changeMobile}>
                  <span className="text">수정</span>
                </button>
              </div>
            </li>
            <Divider style={{ margin: 0 }} />
            <li>
              <div className="row_item email">
                <span className="item_text">
                  <span className="item_icon">
                    <FaRegUser />
                  </span>
                  test@naver.com
                </span>
                <button type="button" className="button_edit" onClick={changeEmail}>
                  <span className="text">수정</span>
                </button>
              </div>
              <Divider style={{ margin: 0 }} />
            </li>
          </ul>
        </div>
      </section>
      <section className="security">
        <div className="account_box">
          <Link className="title" href="/">
            <h2 className="title_text">보안설정</h2>
          </Link>

          <ul className="account_row">
            <li>
              <div className="row_item name">
                <span className="item_text">
                  <span className="item_icon">
                    <FaRegUser />
                  </span>
                  비밀번호
                </span>
                <button type="button" className="button_edit" onClick={changeName}>
                  <span className="text">수정</span>
                </button>
              </div>
            </li>
            <Divider style={{ margin: 0 }} />

            <li>
              <div className="row_item mobile">
                <span className="item_text">
                  <span className="item_icon">
                    <FaRegUser />
                  </span>
                  2단계 인증
                </span>
                <button type="button" className="button_accent" onClick={changeMobile}>
                  <span className="text">설정</span>
                </button>
              </div>
            </li>
            <Divider style={{ margin: 0 }} />
            <li>
              <div className="row_item email">
                <span className="item_text">
                  <span className="item_icon">
                    <FaRegUser />
                  </span>
                  타지역 로그인 차단
                </span>
                <Switch onChange={onLocationChange} style={{ float: 'right', width: '48px' }} />
              </div>
            </li>
            <Divider style={{ margin: 0 }} />
            <li>
              <div className="row_item email">
                <span className="item_text">
                  <span className="item_icon">
                    <FaRegUser />
                  </span>
                  해외 로그인 차단
                </span>
                <Switch onChange={onOverseaChange} style={{ float: 'right', width: '48px' }} />
              </div>
              <Divider style={{ margin: 0 }} />
            </li>
          </ul>
        </div>
      </section>
      <section className="history">
        <div className="account_box">
          <Link className="title" href="/">
            <h2 className="title_text">이력관리</h2>
          </Link>

          <ul className="account_row">
            <li>
              <div className="row_item name">
                <span className="item_text">
                  <span className="item_icon">
                    <FaRegUser />
                  </span>
                  로그인 목록
                </span>
                <button type="button" className="button_edit" onClick={changeName}>
                  <span className="text">확인</span>
                </button>
              </div>
            </li>
            <Divider style={{ margin: 0 }} />

            <li>
              <div className="row_item mobile">
                <span className="item_text">
                  <span className="item_icon">
                    <FaRegUser />
                  </span>
                  내 활동 기록 보기
                </span>
                <button type="button" className="button_edit" onClick={changeName}>
                  <span className="text">확인</span>
                </button>
              </div>
            </li>
            <Divider style={{ margin: 0 }} />
            <li>
              <div className="row_item email">
                <span className="item_text">
                  <span className="item_icon">
                    <FaRegUser />
                  </span>
                  연결된 서비스 관리
                </span>
                <button type="button" className="button_edit" onClick={changeName}>
                  <span className="text">확인</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
        {layerPopupOpen && (
          <DefaultLayer open={layerPopupOpen}>
            <DefaultPopupPanel
              actionClose={() => {
                setLayerPopupOpen(false)
              }}
            >
              <>
                {layerType === 'changeName' && <ChangeName handlePopupClose={handlePopupClose} />}
                {layerType === 'changeMobile' && <ChangeMobile handlePopupClose={handlePopupClose} />}
                {layerType === 'changeEmail' && <ChangeEmail handlePopupClose={handlePopupClose} />}
              </>
            </DefaultPopupPanel>
          </DefaultLayer>
        )}
      </section>
    </>
  )
}

export default EditUser
