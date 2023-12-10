import React from 'react'
import styles from './footer.module.css'
import { FaGamepad, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { GoArrowRight } from 'react-icons/go'
const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.cs__section}>
        <div className={styles.cs__info}>
          <p className={styles.info__title}>고객센터 1000-1000</p>
          <p className={styles.info__description}>운영시간 : 평일 09:00 - 17:00 (점심시간: 12:00-13:00 제외)</p>
        </div>
        <div className={styles.cs__button__box}>
          <Link href="https://www.29cm.co.kr/mypage/cscenter/faq-cs/faq-list" className={styles.button__faq}>
            FAQ <GoArrowRight />
          </Link>
          <Link href="https://www.29cm.co.kr/mypage/cscenter/qna/qna-mantoman-detail" className={styles.button__qna}>
            1:1문의 <GoArrowRight />
          </Link>
          <div className={styles.footer__sns__app}>asfasf</div>
        </div>
      </div>
      <div className={styles.footer__half}>
        <div className={styles.notice__section}>
          <h2 className={styles.notice__title}>NOTICE</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.menu__section}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <h2 className={styles.menu__title}>ABOUT US</h2>
            </li>
            <li>
              <h2 className={styles.menu__title}>MY ORDER</h2>
            </li>
            <li>
              <h2 className={styles.menu__title}>MY ACCOUNT</h2>
            </li>
            <li>
              <h2 className={styles.menu__title}>HELP</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__info}>
        <div className={styles.footer__documentation}>
          <Link href="https://www.29cm.co.kr/home/agreement" className={styles.documentation__privacy}>
            개인정보처리방침
          </Link>
          <Link href="https://www.29cm.co.kr/home/private" className={styles.documentation__terms}>
            이용약관
          </Link>
        </div>

        <div className={styles.footer__corp}>
          <p>
            <span style={{ padding: '0 0.5rem 0 0' }}>상호명:주식회사 플랜아이 (PLANI Co., Ltd.)</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>사업장소재지:대전 유성구 문지로 282-10 (문지동 659-1)</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>사업자 번호:305-81-72470</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>응용 소프트웨어 개발 및 공급업</span>
          </p>
          <p>
            <span style={{ padding: '0 0.5rem 0 0' }}>TEL.042-934-3508</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>이메일:doremi@plani.co.kr</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>대표:DOREMI</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>서비스:(주)플랜아이</span>
          </p>
          <p>
            <span style={{ padding: '0 0.5rem 0 0' }}>PLANI, 정보를 쉽고 가치있게</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
