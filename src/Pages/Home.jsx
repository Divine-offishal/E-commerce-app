import React from 'react'
import Accordion from '../Components/Accordion'
import Carousel from '../Components/Carousel'
import Info from '../Components/Info'
import Products from '../Components/Products'
import Review from '../Components/Review'
import Test from './Test'

const Home = () => {
  return (
    <>
      <Carousel/>
      <Products/>
      <Info/>
      <Accordion/>
      <Review/>
      <Test/>
    </>
  )
}

export default Home