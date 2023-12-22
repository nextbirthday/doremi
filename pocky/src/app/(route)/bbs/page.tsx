import React from 'react'
import VisitBookmark from '@/app/components/bbs/visit/visitBookmark'
import styles from './page.module.css'
import Link from 'next/link'
import SearchChannel from '@/app/components/bbs/search/searchChannel'
import BoardList from '@/app/components/bbs/board/boardList'
import PopularBox from '@/app/components/bbs/popular/popularBox'
const Bbs = () => {
  return (
    <>
      {/* 최근 방문 리스트 북마크 <VisitBookmark />*/}

      <div className={styles.bbs_wrapper}>
        <article className={styles.board_wrap}>
          <div className={styles.form_group}>
            <div className={styles.form_text}>
              <SearchChannel />
              <div className={styles.private_channel_box}>
                <span className={styles.private_channel_text}>찾는 채널이 없나요?</span>
                <Link href="/bbs/private" className={styles.private_link}>
                  개인 채널 찾기
                </Link>
              </div>
            </div>
            {/* 게시판 목록(채널 리스트) */}
            <BoardList />
          </div>
        </article>
        <aside className={styles.sidebar_wrapper}>
          {/* 인기 검색어 박스 */}
          <PopularBox />
        </aside>
      </div>
    </>
  )
}

export default Bbs
