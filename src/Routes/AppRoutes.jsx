import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Cart from '../Components/Cart'
import Test from '../Pages/Test'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products/:name' element={<Product/>}/>
      <Route path='/newProd/:name' element={<Test/>}/>
    </Routes>
  )
}

export default AppRoutes