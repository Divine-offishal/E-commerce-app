import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 w-screen bg-blue-500 md:flex hidden items-center fixed top-0 left-0 z-50'>
      <h1 className=' text-4xl font-bold ml-6'>Logo</h1>

      <div className='flex ml-auto text-lg items-center mr-10'>
        <h1 className='mx-2'>Home</h1>
        <h1 className='mx-2'>About Us</h1>
        <h1 className='mx-2'>Contact us</h1>
      </div>
    </div>
  )
}

export default Navbar