import { useState } from 'react'
import './App.css'
import Navbar from './Navigation/Navbar'
import MobileNav from './Navigation/MobileNav'
import AppRoutes from './Routes/AppRoutes'
import Footer from './Footer/Footer'

function App() {

  
  return (
    <div >
      <Navbar/>
      <MobileNav/>
      <AppRoutes/>
      <Footer/>
    </div>
  )
}

export default App
