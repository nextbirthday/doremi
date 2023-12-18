import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import './header.css'
const Header = () => {
  return (
    <>
      <header id="header" role="banner" className="header">
        <div className="header__logo">
          <Image src="/blueArchive/schale_black_crop.png" alt="헤더아이콘" width={42} height={40} />
          <h1 className="header__logo__title">
            <Link href="/" className="header__logo__title">
              PRETZ
            </Link>
          </h1>
        </div>
        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <Link href="/profile" className="header__menu__item">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/blog" className="header__menu__item">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/products" className="header__menu__item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/testimonial" className="header__menu__item">
                Tesitmonials
              </Link>
            </li>
            <li>
              <Link href="/youtube" className="header__menu__item">
                Youtube
              </Link>
            </li>
            <li>
              <Link href="/mypage" className="header__menu__item">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/signin" className="header__menu__item">
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <button className="header__toggle" aria-label="navigation menu toggle">
          <FaBars size={30} color="black" />
        </button>
      </header>
    </>
  )
}

export default Header
