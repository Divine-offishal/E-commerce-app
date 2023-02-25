import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../Pages/Home'
import Product from '../Pages/Product'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:name' element={<Product/>}/>
    </Routes>
  )
}

export default AppRoutes