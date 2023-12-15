/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './about.module.css'
import { FaHtml5, FaDatabase } from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'
const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>Full-Stack Developer</p>{' '}
      <ul className={styles.majors}>
        <li className={styles.major}>
          <FaHtml5 className={styles.major_icon} />
          <p className={styles.major_title}>Front-End</p>
          <p>HTML, CSS, JavaScript, TypeScript, React, Vue, Web APIs, Next js</p>
        </li>
        <li className={styles.major}>
          <FaDatabase className={styles.major_icon} />
          <p className={styles.major_title}>Back-End</p>
          <p>Java, JavaScript, NodeJs, REST APIs, GraphQL, Python, Express, Nest JS</p>
        </li>
        <li className={styles.major}>
          <MdOutlinePhoneIphone className={styles.major_icon} />
          <p className={styles.major_title}>Mobile</p>
          <p>Android, ios, React Native, Flutter, Swift, Kotlin</p>
        </li>
      </ul>
      <ul className={styles.jobs}>
        <li className={styles.job}>
          <img src="/jobs/plani.jpg" style={{ width: 65, height: 24 }} alt="에큐온저축은행" />
          <div>
            <p className={styles.job_name}>에큐온저축은행 시스템 Back-End Developer</p>
            <p className={styles.job_period}>2023.05.01 ~ 2023.08.30 </p>
          </div>
        </li>
        <li className={styles.job}>
          <img src="/jobs/plani.jpg" style={{ width: 65, height: 24 }} alt="플랜아이로고" />
          <div>
            <p className={styles.job_name}>플랜아이 Full Stack Developer</p>
            <p className={styles.job_period}>2023.10.10 ~ 2024.12.26 </p>
          </div>
        </li>
        {/* <li className={styles.job}>
          <img src="/jobs/google.png" alt="구글로고" />
          <div>
            <p className={styles.job_name}>Google as Junior Software engineer</p>
            <p className={styles.job_period}>2020 July - Until Now</p>
          </div>
        </li>
        <li className={styles.job}>
          <img src="/jobs/samsung.png" alt="삼성로고" />
          <div>
            <p className={styles.job_name}>Sansung as Software engineer</p>
            <p className={styles.job_period}>2017 July - 2020 May</p>
          </div>
        </li>
        <li className={styles.job}>
          <img src="/jobs/nexon.svg" style={{ width: 65, height: 24 }} alt="넥슨로고" />
          <div>
            <p className={styles.job_name}>NEXON GAMES as Story CM</p>
            <p className={styles.job_period}>2015 June - 2017 May</p>
          </div>
        </li> */}
      </ul>
    </section>
  )
}

export default About
