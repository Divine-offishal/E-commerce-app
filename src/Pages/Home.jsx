import React from 'react'
import Accordion from '../Components/Accordion'
import Carousel from '../Components/Carousel'
import Info from '../Components/Info'
import Products from '../Components/Products'
import Review from '../Components/Review'

const Home = () => {
  return (
    <>
      <Carousel/>
      <Products/>
      <Info/>
      <Accordion/>
      <Review/>
    </>
  )
}

export default Home