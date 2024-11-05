import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import Topreviews from '../components/Topreviews.jsx'

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Topreviews />
      <Footer />
    </div>
  )
}

export default Home
