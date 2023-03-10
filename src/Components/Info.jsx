import React from 'react'

const Info = () => {
  return (
    <div className='mt-32 mb-20 md:flex ml-10 items-center justify-center'>
      <div className='bg-green-600 text-neutral-50 h-32 lg:w-56 md:w-3/12 w-56 md:mx-20 text-center'>
        <span className='md:my-10 mt-32 text-2xl'>
          <h1>Track your delivery</h1>
        </span>
      </div>

      <div className='bg-indigo-600 text-neutral-50 h-32 lg:w-56 md:w-3/12 w-56 md:mx-20 text-center'>
        <h1 className='md:my-10 mt-20'>Payment Options</h1>
      </div>

      <div className='bg-orange-600 text-neutral-50 h-32 lg:w-56 md:w-3/12 w-56 md:mx-20 text-center'>
        <h1 className='md:my-10 mt-20'>About Us</h1>
      </div>
    </div>
  )
}

export default Info