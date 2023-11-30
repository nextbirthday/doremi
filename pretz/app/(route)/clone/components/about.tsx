import React from 'react'
import styles from './about.module.css'

import { FaHtml5, FaDatabase } from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'
const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.title}>About Me</h2>{' '}
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minus similique corporis nemo ea voluptates itaque labore facilis dolores, cum illum amet debitis. Ducimus
        iste suscipit vero enim ut totam!
      </p>
      <ul className={styles.majors}>
        <li className={styles.major}>
          <FaHtml5 className={styles.major__icon} />
          <p className={styles.major__title}>Front-End</p>
          <p>HTML, CSS, JavaScript, TypeScript, React, Vue, Web APIs, Next js</p>
        </li>
        <li className={styles.major}>
          <FaDatabase className={styles.major__icon} />
          <p className={styles.major__title}>Back-End</p>
          <p>Java, JavaScript, NodeJs, REST APIs, GraphQL, Python, Express, Nest JS</p>
        </li>
        <li className={styles.major}>
          <MdOutlinePhoneIphone className={styles.major__icon} />
          <p className={styles.major__title}>Mobile</p>
          <p>Android, ios, React Native, Flutter, Swift, Kotlin</p>
        </li>
      </ul>
      <ul className={styles.jobs}>
        <li className={styles.job}>
          <img src="./images/jobs/google.png" alt="구글로고" />
          <div>
            <p className={styles.job__name}>Google as Junior Software engineer</p>
            <p className={styles.job__period}>2020 July - Until Now</p>
          </div>
        </li>
        <li className={styles.job}>
          <img src="./images/jobs/samsung.png" alt="삼성로고" />
          <div>
            <p className={styles.job__name}>Sansung as Software engineer</p>
            <p className={styles.job__period}>2017 July - 2020 May</p>
          </div>
        </li>
        <li className={styles.job}>
          <img src="./images/jobs/nexon.svg" style={{ width: 65, height: 24 }} alt="넥슨로고" />
          <div>
            <p className={styles.job__name}>NEXON GAMES as Story CM</p>
            <p className={styles.job__period}>2015 June - 2017 May</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default About
