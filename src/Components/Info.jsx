import React from 'react'

const Info = () => {
  return (
    <div className='mt-32 mb-20 md:flex ml-10 items-center justify-center'>
      <div className='bg-green-600 text-neutral-50 h-32 w-56 mx-20 text-center'>
        <h1 className='my-10'>Track your delivery</h1>
      </div>

      <div className='bg-indigo-600 text-neutral-50 h-32 w-56 mx-20 text-center'>
        <h1 className='my-10'>Payment Options</h1>
      </div>

      <div className='bg-orange-600 text-neutral-50 h-32 w-56 mx-20 text-center'>
        <h1 className='my-10'>About Us</h1>
      </div>
    </div>
  )
}

export default Info