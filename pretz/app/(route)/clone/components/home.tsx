import React from 'react'
import styles from './home.module.css'

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <img className={styles.home__avatar} src="/images/blueArchive/schale_black_crop.png" alt="샬레" />
      <h2 className={styles.home__title}>
        NEXON GAMES, NEXON MX <br />
        <strong className={styles.home__title__strong}>Archive</strong>
        <p className={styles.home__description}>포트폴리오</p>
        <a href="#contact" className={styles.home__contact}>
          Community
        </a>
      </h2>
    </section>
  )
}

export default Home
