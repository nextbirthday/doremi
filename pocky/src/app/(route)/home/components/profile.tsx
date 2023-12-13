/* eslint-disable @next/next/no-img-element */
import { FaGithub } from 'react-icons/fa'
import styles from './profile.module.css'
const Profile = () => {
  return (
    <section id="profile" className={styles.profile}>
      <img className={styles.profile__image} src="/blue_archive_cutscene/BG_CS_PV4_072.jpg" alt="샬레" />
      <h2 className={styles.profile__title}>Dumars Yoon, Archive</h2>
      <p className={styles.profile__description}>Portfolio</p>
      <a href="#footer" className={styles.profile__contact}>
        <span className={styles.profile__github}>
          <FaGithub />
        </span>
      </a>
    </section>
  )
}

export default Profile
