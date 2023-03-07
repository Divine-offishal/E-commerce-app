import { useState } from 'react'
import './App.css'
import Navbar from './Navigation/Navbar'
import MobileNav from './Navigation/MobileNav'
import AppRoutes from './Routes/AppRoutes'
import Footer from './Footer/Footer'
import AppState from './Context/AppState'

function App() {

  
  return (
    <AppState>
      <div >
        <Navbar/>
        <MobileNav/>
        <AppRoutes/>
        <Footer/>
      </div>
    </AppState>
  )
}

export default App
