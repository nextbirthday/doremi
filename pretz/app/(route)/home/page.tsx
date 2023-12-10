import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Profile from './components/profile'
import About from './components/about'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default Home
