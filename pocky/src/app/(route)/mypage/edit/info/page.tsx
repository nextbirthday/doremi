/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import Image from 'next/image'
import DefaultLayer from '@/app/components/layer/defaultLayer'
import DefaultPopupPanel from '@/app/components/panels/dafaultPopupPanel'
import ChangeEmail from '@/useClient/mypage/edit/changeEmail'
import ChangeMobile from '@/useClient/mypage/edit/changeMobile'
import ChangeName from '@/useClient/mypage/edit/changeName'
import { Divider, Switch } from 'antd'
import { useEffect, useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import styles from './edituser.module.css'
import axios from 'axios'
const EditUser = () => {
  const [layerType, setLayerType] = useState('')
  const [layerPopupOpen, setLayerPopupOpen] = useState(false)

  const getUser = async () => {
    const id = 'clqf5gavc000ix0dqnk2msr3q'
    try {
      const response = await axios.post('/api/user/info', {
        data: id,
      })
      console.log('response ===>', response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
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
      <section className={styles.edit_header}>
        <h2 className={styles.edit_title}>회원 정보 수정</h2>
      </section>
      <div className={styles.header_wrap}>
        <div className={styles.logo_area}>
          <Image src="/schale/schale_black_crop.png" alt="헤더아이콘" width={48} height={42} />
          <h1 className={styles.logo_text}>
            <Link href="/" className={styles.logo_text}>
              POCKY
            </Link>
          </h1>
        </div>
        <div className={styles.profile_area}>
          <div className={styles.profile_inner}>
            <Link href="/edit/photo" className={styles.profile_photo}>
              <img src="https://phinf.pstatic.net/contact/20221004_60/1664848950096SFtsP_JPEG/image.jpg?type=s160" alt="프로필사진" />
            </Link>
            <p className={styles.profile_info_id}>dumars</p>
            <p className={styles.profile_info_emial}>doremi@plani.co.kr</p>
          </div>
        </div>
        <div className={styles.menu_area}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <Link href="/">
                <h2 className={styles.menu_text}>내프로필</h2>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">
                <h2 className={styles.menu_text}>보안설정</h2>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">
                <h2 className={styles.menu_text}>이력관리</h2>
              </Link>
            </li>
          </ul>
          <Divider />
        </div>
      </div>
      <div className={styles.account_wrap}>
        <section className={styles.profile}>
          <div className={styles.account_box}>
            <Link className={styles.title} href="/">
              <h2 className={styles.title_text}>내프로필</h2>
            </Link>
            <ul className={styles.account_row}>
              <li>
                <div className={`${styles.row_item} ${styles.row_item_name}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <FaRegUser />
                    </span>
                    플랜아이
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeName}>
                    <span className={styles.text}>실명수정</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_mobile}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <FaRegUser />
                    </span>
                    010-1234-1244
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeMobile}>
                    <span className={styles.text}>수정</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_email}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <FaRegUser />
                    </span>
                    test@naver.com
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeEmail}>
                    <span className={styles.text}>수정</span>
                  </button>
                </div>
                <Divider style={{ margin: 0 }} />
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.security}>
          <div className={styles.account_box}>
            <Link className={styles.title} href="/">
              <h2 className={styles.title_text}>보안설정</h2>
            </Link>
            <ul className={styles.account_row}>
              <li>
                <div className={`${styles.row_item} ${styles.row_item_name}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <FaRegUser />
                    </span>
                    비밀번호
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeName}>
                    <span className="text">수정</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_mobile}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <FaRegUser />
                    </span>
                    2단계 인증
                  </span>
                  <button type="button" className={styles.button_accent} onClick={changeMobile}>
                    <span className={styles.text}>설정</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_email}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <FaRegUser />
                    </span>
                    타지역 로그인 차단
                  </span>
                  <Switch onChange={onLocationChange} style={{ float: 'right', width: '48px' }} />
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_email}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
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
        <section className={styles.history}>
          <div className={styles.account_box}>
            <Link className={styles.title} href="/">
              <h2 className={styles.title_text}>이력관리</h2>
            </Link>
            <ul className={styles.account_row}>
              <li>
                <div className={`${styles.row_item} ${styles.row_item_name}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <FaRegUser />
                    </span>
                    로그인 목록
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeName}>
                    <span className={styles.text}>확인</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_mobile}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <FaRegUser />
                    </span>
                    내 활동 기록 보기
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeName}>
                    <span className={styles.text}>확인</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_email}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <FaRegUser />
                    </span>
                    연결된 서비스 관리
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeName}>
                    <span className={styles.text}>확인</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
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
    </>
  )
}

export default EditUser
