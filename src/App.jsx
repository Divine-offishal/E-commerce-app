import { useState } from 'react'
import './App.css'
import Navbar from './Navigation/Navbar'
import MobileNav from './Navigation/MobileNav'
import AppRoutes from './Routes/AppRoutes'
import Footer from './Footer/Footer'
import AppState from './Context/AppState'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {

  
  return (
    <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <AppState>
        <div >
          <Navbar/>
          <MobileNav/>
          <AppRoutes/>
          <Footer/>
        </div>
      </AppState>
    </SkeletonTheme>
  )
}

export default App
