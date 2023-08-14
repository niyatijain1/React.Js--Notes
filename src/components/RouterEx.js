import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

const RouterEx = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/contact" element={<div>login</div>}></Route>
        <Route path="*" element={<div>error 404</div>}></Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default RouterEx
