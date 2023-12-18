import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import React from 'react'
import Profile from './components/profile'
import About from './components/about'
import Skills from './components/skills'
import Career from './components/career'
import Testimonial from './components/testimonial'

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ padding: '2rem 3rem 2rem 3rem' }}>
        <Profile />
        <About />
        <Skills />
        <Career />
        <Testimonial />
      </div>
      <Footer />
    </>
  )
}

export default Home
