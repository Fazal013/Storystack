import React from 'react'
import Home from './home/Home'
import Whatoread from "./whattoread/Whatoread"
import { Routes,Route } from "react-router-dom"
import Signup from './components/Signup'

function App() { 
  return (
    <>
    <div >
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whattoread" element={<Whatoread />} />
      <Route path="/signup" element={<Signup />} />
     </Routes>
    </div>
    </>
  )
}

export default App
