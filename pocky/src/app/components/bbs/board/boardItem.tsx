/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './boardItem.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { GoPlus } from 'react-icons/go'
import { FaCheck } from 'react-icons/fa6'
const BoardItem = () => {
  return (
    <>
      <div className={styles.board_item}>
        <div className={styles.left}>
          <img src="/cutscene/BG_CS_S1Final_14.jpg" alt="채널아이콘" className={styles.channel_icon}></img>
        </div>
        <div className={styles.right}>
          <div className={styles.head}>
            <Link href="/bbs" className={styles.channel_name}>
              채널 이름
            </Link>
            <button type="button" className={styles.channel_subscribe_button}>
              <GoPlus size={'1.3em'} />
              {/* <FaCheck size={'1.3em'}/> */}
            </button>
          </div>
          <div className={styles.description}>
            <span className={styles.subscriber_count}>구독자 count</span>
            <span className={styles.channel_user}>@user-info</span>
            <div className={styles.channel_text}>메루의 생일을 축하합니다! | 모에, 귀여운 미유 복각 픽업! (12.19~12.26)</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardItem
