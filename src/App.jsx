import { useState } from 'react'
import './App.css'
import Navbar from './Navigation/Navbar'
import MobileNav from './Navigation/MobileNav'
import AppRoutes from './Routes/AppRoutes'

function App() {

  
  return (
    <div >
      <Navbar/>
      <MobileNav/>
      <AppRoutes/>
    </div>
  )
}

export default App
