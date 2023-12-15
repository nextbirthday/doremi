/* eslint-disable @next/next/no-img-element */
import { FaGithub } from 'react-icons/fa'
import styles from './profile.module.css'
import Link from 'next/link'
const Profile = () => {
  return (
    <section id="profile" className={styles.profile}>
      <img className={styles.profile_image} src="/blue_archive_cutscene/BG_CS_PV4_072.jpg" alt="샬레" />
      <h2 className={styles.profile_title}>Dumars Yoon, Archive</h2>
      <p className={styles.profile_description}>Portfolio</p>
      <a href="#footer" className={styles.profile_contact}>
        <Link href="https://github.com/nextbirthday/doremi">
          <span className={styles.profile_github}>
            <FaGithub />
          </span>
        </Link>
      </a>
    </section>
  )
}

export default Profile
