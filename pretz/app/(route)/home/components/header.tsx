import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import styles from './header.module.css'
const Header = () => {
  return (
    <>
      <header id="header" role="banner" className={styles.header}>
        <div className={styles.header__logo}>
          <Image src="/images/blueArchive/schale_black_crop.png" alt="헤더아이콘" width={42} height={40} />
          <h1 className={styles.header__logo__title}>
            <Link href="/clone" className={`${styles.header__logo__title}`}>
              PRETZ
            </Link>
          </h1>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__menu}>
            <li>
              <Link href="#profile" className={`${styles.header__menu__item} `}>
                Profile
              </Link>
            </li>
            <li>
              <Link href="/blog" className={styles.header__menu__item}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/products" className={styles.header__menu__item}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/account" className={styles.header__menu__item}>
                My Account
              </Link>
            </li>
            <li>
              <Link href="#testimonial" className={styles.header__menu__item}>
                Tesitmonials
              </Link>
            </li>
            <li>
              <Link href="/signin" className={styles.header__menu__item}>
                Login
              </Link>
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
