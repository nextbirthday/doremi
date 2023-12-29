'use client'

import BoardBread from '@/components/bbs/board/boardBread'
import BoardButton from '@/components/bbs/board/boardButton'
import BoardTitle from '@/components/bbs/board/boardTitle'
import PopularBox from '@/components/bbs/popular/popularBox'
import VisitBookmark from '@/components/bbs/visit/visitBookmark'
import styles from './page.module.css'
import BoardTaps from '@/components/bbs/board/boardTaps'
const Channel = ({ params }: { params: { id: string } }) => {
  const id = params.id
  console.log(id)
  if (!id) {
    return <></>
  }
  return (
    <div className={styles.bbs_wrapper}>
      <article className={styles.board_wrap}>
        <BoardTitle id={id} />
        <div className={styles.button_warp}>
          <BoardButton />
        </div>
        <VisitBookmark />
        <div className={styles.article_list}>
          <div className={styles.channel_taps}>
            {/* 채널 탭 */}
            <BoardTaps />
          </div>
        </div>
        <BoardButton />
      </article>
      <aside className={styles.sidebar_wrapper}>
        <PopularBox />
        <PopularBox />
      </aside>
    </div>
  )
}

export default Channel
