import React from 'react'
import { NavLink } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
      <h1 className='text-center text-3xl text-purple-600 font-semibold mt-4'>Hi there....Your cart is empty.</h1>
      <NavLink to='/'>
        <h1 className='text-center text-2xl text-purple-500 mt-4 font-semibold'>Go back home</h1>
      </NavLink>
    </div>
  )
}

export default EmptyCart