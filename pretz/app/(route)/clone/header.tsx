import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import styles from './header.module.css'

const Header = () => {
  return (
    <>
      <header id="header" className={styles.header}>
        <div className={styles.header__logo}>
          <Image src="/images/blueArchive/schale_black_crop.png" alt="샬레" width={42} height={40} />
          <h1 className={styles.header__logo__title}>
            <Link href="/clone" className={`${styles.header__logo__title}`}>
              S.C.H.A.L.E.
            </Link>
          </h1>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__menu}>
            <li>
              <a href="#home" className={styles.header__menu__item}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.header__menu__item}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.header__menu__item}>
                Skills
              </a>
            </li>
            <li>
              <a href="#career" className={styles.header__menu__item}>
                Career
              </a>
            </li>
            <li>
              <a href="#testimonial" className={styles.header__menu__item}>
                Tesitmonials
              </a>
            </li>
            <li>
              <a href="#footer" className={styles.header__menu__item}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className={styles.header__toggle} aria-label="navigation menu toggle">
          <FaBars size={30} color="black" />
        </button>
      </header>
    </>
  )
}

export default Header
