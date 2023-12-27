/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './boardTitle.module.css'
import Link from 'next/link'

const BoardTitle = ({ id }: any) => {
  return (
    <div className={styles.board_title}>
      <div className={styles.left}>
        {/* 채널 아이콘 이미지 */}
        <Link href={`/bbs/${id}`}>
          <img src="/cutscene/BG_CS_S1Final_14.jpg" alt="채널아이콘" className={styles.channel_icon} />
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.head}>
          <Link href="/bbs" className={styles.channel_name}>
            원신 채널
          </Link>
          <div className={styles.buttons}>
            <Link href={`/bbs/${id}`} className={styles.wiki_button}>
              <span className={styles.button_text}>채널위키</span>
            </Link>
            <Link href={`/bbs/${id}`} className={styles.wiki_button}>
              <span className={styles.button_text}>구독</span>
            </Link>
            <Link href={`/bbs/${id}`} className={styles.wiki_button_notification}>
              <span className={styles.button_text}>알림</span>
            </Link>
          </div>
        </div>
        <div className={styles.description}>
          <span className={styles.subscriber_count}>구독자 count</span>
          <span className={styles.notification_count}> | 알림수신 count</span>
          <div className={styles.channel_text}>채널타이틀 (12.19~12.26)</div>
        </div>
      </div>
    </div>
  )
}

export default BoardTitle
