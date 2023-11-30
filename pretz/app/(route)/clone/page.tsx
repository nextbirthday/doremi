import React from 'react'
import Header from './header'
import Footer from './footer'
import styles from './page.module.css'
import Image from 'next/image'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Testimonial from './components/testimonial'
import Career from './components/career'

const Clone = () => {
  
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Career />
        <Testimonial />
      </main>
      <Footer />
    </>
  )
}

export default Clone
