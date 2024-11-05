import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Whattoread from '../components/Whattoread'


function Whatoread() {
    
  return (
    <>
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Whattoread/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Whatoread
