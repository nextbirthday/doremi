'use strict'

const header_menu = document.querySelector('.header__menu')

const header_menu_item = document.querySelector('.header__menu__item')
header_menu.addEventListener('click', (event) => {
  const active = document.querySelector('.active')
  active.classList.remove('active')
  event.target.classList.add('active')
})

const header = document.querySelector('.header')

const hederHeight = header.getBoundingClientRect().height

document.addEventListener('scroll', () => {
  if (window.scrollY > hederHeight) {
    header.classList.add('header--dark')
  } else {
    header.classList.remove('header--dark')
  }
})

/* Home 섹션을 아래로 스크롤 시 투명하게 처리 */

const home = document.querySelector('.home__container')

const homeHeight = home.offsetHeight

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight
})

const arrow = document.querySelector('.arrow-up')

document.addEventListener('scroll', () => {
  /*  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1
  } else {
    arrowUp.style.opacity = 0
  } */
  arrow.style.opacity = window.scrollY / homeHeight - 1
})

/* Navbar toggle 버튼 클릭 처리 */

const navbarMenu = document.querySelector('.header__menu')

const navbarToggle = document.querySelector('.header__toggle')

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open')
})

navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open')
})
