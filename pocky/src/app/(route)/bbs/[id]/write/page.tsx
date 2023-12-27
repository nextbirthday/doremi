'use client'
import React, { useRef } from 'react'
import styles from './page.module.css'
import PopularBox from '@/components/bbs/popular/popularBox'
import BoardTitle from '@/components/bbs/board/boardTitle'
import { useForm } from 'react-hook-form'
// Toast 에디터
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
const Write = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data: any) => {
    console.log('data ===>', data)
  }
  const editorRef = useRef<Editor>(null)
  // const handleImage = async (file: File, callback: typeof Function) => {
  //   const imageUrl = await getImageUrl(file)
  //   callback(imageUrl)
  // }
  const getContents = () => {
    const markdownContent = editorRef.current?.getInstance().getMarkdown()
    console.log('markdownContent', markdownContent)
    const htmlContent = editorRef.current?.getInstance().getHTML()
    console.log('htmlContent', htmlContent)
  }

  const toolbarItems = [['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['link', 'image'], ['scrollSync']]
  return (
    <div className={styles.write_wrapper}>
      <article className={styles.article_write}>
        <BoardTitle />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.write_head}>글쓰기</div>
          <div className={styles.sub_row}>
            <span className={styles.bullet_point_text}>글머리</span>
            <span>
              <input type="radio" id="category-general" {...register('category')} defaultChecked required className={styles.radioInput} />
              <label htmlFor="category-general">일반</label>
            </span>
            <span>
              <input type="radio" id="category-notice" {...register('category')} value="공지" className={styles.radioInput} />
              <label htmlFor="category-notice">공지</label>
            </span>
            <span>
              <input type="radio" id="category-channel-notice" {...register('category')} value="채널공지" className={styles.radioInput} />
              <label htmlFor="category-channel-notice">채널공지</label>
            </span>
          </div>

          <div className={styles.title_row}>
            <div className={styles.title_input_group}>
              <span className={styles.title_group_text}>제목</span>
              <input className={styles.title_input} type="text" {...register('title')} id="input_title" maxLength={256} required />
            </div>
          </div>

          <div className={styles.write_body}>
            <Editor
              initialValue="hello react editor world!"
              initialEditType="markdown"
              height="100%"
              hideModeSwitch={true}
              usageStatistics={false}
              toolbarItems={toolbarItems}
              editorRef={editorRef}
              plugins={[colorSyntax]}
            />
          </div>
          <button className={styles.submit_button} type="submit">
            submit
          </button>
        </form>
        <button type="button" onClick={getContents}>
          에디터 내용 출력하기
        </button>
      </article>

      <aside className={styles.sidebar_wrapper}>
        {/* 인기 검색어 박스 */}
        <PopularBox />
      </aside>
    </div>
  )
}

export default Write
