import React from 'react'
import styles from './visitBookmark.module.css'
import VisitRecent from './visitRecent'
import Link from 'next/link'
import { Space, Tag } from 'antd'
import NewvisitList from './newvisitList'

const VisitBookmark = () => {
  return (
    <div className={styles.visit_bookmark}>
      <div className={styles.newvisit_history}>
        <div className={styles.visit_recent}>
          {/* 최근 방문 컴포넌트 */}
          <VisitRecent />
        </div>

        <div className={styles.newvisit_box}>
          {/* 최근 방문 목록(리스트) 컴포넌트 */}
          <NewvisitList />
        </div>
      </div>
    </div>
  )
}

export default VisitBookmark
