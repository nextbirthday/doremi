'use client'
/* eslint-disable @next/next/no-img-element */
import Footer from '@/app/components/footer/footer'
import { Checkbox, Switch, Tabs } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FaRegUser } from 'react-icons/fa'
import { RiLockPasswordLine } from 'react-icons/ri'
import './page.css'
import { useState } from 'react'
import FormMessage from '@/app/components/form/formMessage'
const Signin = () => {
  const { register, handleSubmit, watch } = useForm()

  const onSubmit = (data: any) => {
    if (!watch('userid').trim()) {
      setIdMessage(true)
      return // Stop the login process
    }
    if (!watch('password').trim()) {
      setPwMessage(true)
      return // Stop the login process
    }

    if (!data) {
      return
    }
    console.log(data)
  }
  const onIpChange = (checked: boolean) => {
    console.log(`switch to ${checked}`)
  }

  const onKeepLoginChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  /* 아이디 체크 */
  const [idMessage, setIdMessage] = useState(false)
  const handleId = (e: any) => {
    const id = e.target.value
    // If the ID is entered, set idMessage to false
    if (id.trim()) {
      setIdMessage(false)
    }

    console.log('id ===>', id)
  }
  /* 비밀번호체크 */
  const [pwMessage, setPwMessage] = useState(false)
  const handlePassword = (e: any) => {
    const password = e.target.value

    // If the password is entered, set pwMessage to false
    if (password.trim()) {
      setPwMessage(false)
    }
  }
  return (
    <>
      <div className="signin__body">
        <header className="signin__header">
          <Link href="/">
            <img src="/jobs/nexon.svg" alt="회사로고" className="signin__logo" />
          </Link>
        </header>

        <div className="signin__wrap">
          <div>
            <Tabs
              defaultActiveKey="1"
              type="card"
              size="small"
              items={[
                {
                  label: 'ID 로그인',
                  key: '1',
                  children: (
                    <>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <ul className="panel_wrap">
                          <li className="panel_item">
                            <div className="panel_inner id">
                              <div className="id_pw_wrap">
                                {/* 아이디 */}
                                <div className="signin_item id">
                                  <span className="signin_label">
                                    <FaRegUser />
                                  </span>
                                  <input
                                    className="signin_input"
                                    type="text"
                                    id="userid"
                                    placeholder="아이디"
                                    maxLength={20}
                                    {...register('userid')}
                                    onChange={handleId}
                                    required
                                  />
                                </div>
                                <div style={{ padding: '0 0 2px 0' }}></div>
                                {/* 비밀번호 */}
                                <div className="signin_item password">
                                  <span className="signin_label">
                                    <RiLockPasswordLine />
                                  </span>
                                  <input
                                    className="signin_input"
                                    id="password"
                                    type="password"
                                    placeholder="비밀번호"
                                    {...register('password')}
                                    onChange={handlePassword}
                                    required
                                  />
                                </div>
                              </div>
                              <div style={{ padding: '0 0 0.5rem 0' }}></div>
                              <div className="login_keep_wrap">
                                <div className="keep_check">
                                  <Checkbox onChange={onKeepLoginChange}>로그인 상태 유지</Checkbox>
                                </div>
                                <div className="ip_check">
                                  <Link href="https://nid.naver.com/login/ext/help_ip3.html">IP보안&nbsp;</Link>
                                  <Switch onChange={onIpChange} />
                                </div>
                              </div>{' '}
                              {idMessage && <FormMessage msg={`아이디를 입력해주세요.`} />}
                              {pwMessage && <FormMessage msg={`비밀번호를 입력해주세요.`} />}
                              <div style={{ padding: '0 0 2rem 0' }}></div>
                              <button onClick={onSubmit} className="signin_button">
                                <span className="signin_text">로그인</span>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </form>
                    </>
                  ),
                },
                {
                  label: '일회용 번호',
                  key: '2',
                  children: 'Content of 일회용 로그인 tab',
                },
                {
                  label: 'QR 로그인',
                  key: '3',
                  children: (
                    <>
                      <ul className="panel_wrap">
                        <li className="panel_item">
                          <div className="panel_inner qr">
                            <div className="qrcode_map">
                              <div className="qrcode_inner">
                                <img src="/blueArchive/schale_black_crop.png" alt="큐알로그인" className="qr_image" />
                                <div className="time_wrap">
                                  <p className="time_next">남은시간</p>
                                  <p className="time_number">00분 00초</p>
                                </div>
                              </div>
                            </div>
                            <h2 className="top_desc">
                              공용 네트워크, 공용 PC라면 안전을 위해 <br /> QR코드로 로그인해주세요.
                            </h2>
                          </div>
                        </li>
                      </ul>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>

        <ul className="signin__help__menu">
          <li className="signin__help__item password">
            <Link href="/user/help/findpw">비밀번호 찾기</Link>
          </li>
          <li className="signin__help__item id">
            <Link href="/user/help/findid">&nbsp;&nbsp;아이디 찾기</Link>
          </li>
          <li className="signin__help__item signup">
            <Link href="/signup">&nbsp;&nbsp;회원가입</Link>
          </li>
        </ul>

        <ul className="signin_social_menu">
          <li className="signin_social_button google">
            <button>구글</button>
          </li>
          <li className="signin_social_button naver">
            <button>네이버</button>
          </li>
          <li className="signin_social_button kakao">
            <button>카카오</button>
          </li>
        </ul>
        <div style={{ padding: '0 0 1rem 0' }}></div>
        <Footer />
      </div>
    </>
  )
}

export default Signin
