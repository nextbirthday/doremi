'use client'
import BoardBread from '@/app/components/bbs/board/boardBread'
import BoardButton from '@/app/components/bbs/board/boardButton'
import BoardTitle from '@/app/components/bbs/board/boardTitle'
import PopularBox from '@/app/components/bbs/popular/popularBox'
import VisitBookmark from '@/app/components/bbs/visit/visitBookmark'
import styles from './page.module.css'
import { Tabs } from 'antd'
import BoardTaps from '@/app/components/bbs/board/boardTaps'
const Channel = ({ params }: { params: { id: string } }) => {
  const id = params.id
  if (!id) {
    return <></>
  }
  return (
    <div className={styles.bbs_wrapper}>
      <article className={styles.board_wrap}>
        <BoardTitle id={id} />
        <div className={styles.float_left}>
          <BoardButton />
        </div>
        <VisitBookmark />
        <div className={styles.article_list}>
          <div className={styles.channel_taps}>
            {/* 채널 탭 */}
            <BoardTaps />
          </div>
        </div>
      </article>
      <aside className={styles.sidebar_wrapper}>
        <PopularBox />
        <PopularBox />
      </aside>
    </div>
  )
}

export default Channel
