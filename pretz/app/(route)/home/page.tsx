import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Profile from './components/profile'
import About from './components/about'
import Skills from './components/skills'
import Career from './components/career'
import Testimonial from './components/testimonial'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <About />
        <Skills />
        <Career />
        <Testimonial />
      </main>
      <Footer />
    </>
  )
}

export default Home
