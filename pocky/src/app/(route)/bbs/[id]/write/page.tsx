'use client'
import React from 'react'
import styles from './page.module.css'
import PopularBox from '@/app/components/bbs/popular/popularBox'
import BoardTitle from '@/app/components/bbs/board/boardTitle'
import { useForm } from 'react-hook-form'
const Write = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data: any) => {
    console.log('data ===>', data)
  }
  return (
    <div className={styles.write_wrapper}>
      <article className={styles.article_write}>
        <BoardTitle />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.write_head}>글쓰기</div>
          <div className={styles.sub_row}>
            <span className={styles.bullet_point_text}>글머리</span>
            <span>
              <input type="radio" id="category-general" name="category" defaultChecked required className={styles.radioInput} />
              <label htmlFor="category-general">일반</label>
            </span>
            <span>
              <input type="radio" id="category-notice" name="category" value="공지" className={styles.radioInput} />
              <label htmlFor="category-notice">공지</label>
            </span>
            <span>
              <input type="radio" id="category-channel-notice" name="category" value="채널공지" className={styles.radioInput} />
              <label htmlFor="category-channel-notice">채널공지</label>
            </span>
          </div>

          <div className={styles.title_row}>
            <div className={styles.title_input_group}>
              <span className={styles.title_group_text}>제목</span>
              <input className={styles.title_input} type="text" name="title" id="input_title" maxLength={256} />
            </div>
          </div>

          <div className={styles.write_body}></div>
        </form>
      </article>
      <aside className={styles.sidebar_wrapper}>
        {/* 인기 검색어 박스 */}
        <PopularBox />
      </aside>
    </div>
  )
}

export default Write
