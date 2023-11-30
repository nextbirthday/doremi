import React from 'react'
import styles from './footer.module.css'
import { FaGamepad, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer id="footer" className={styles.footer}>
        <h2 className={styles.footer__title}>PLANI CMS</h2>
        <p></p>
        <ul className={styles.footer__links}>
          <li>
            <a className={styles.footer__link} href="https://github.com/orgs/plani-dev-team/dashboard" target="_blank">
              <FaGithub color="white" />
            </a>
          </li>
          <li>
            <a className={styles.footer__link} href="https://bluearchive.nexon.com/events/2023/10/2nd">
              <FaGamepad color="white" />
            </a>
          </li>
        </ul>
        <p>이용약관 | 개인정보처리방침</p>
        <p>© NEXON Korea Corp. All Right Reserved.</p>
      </footer>
    </>
  )
}

export default Footer
