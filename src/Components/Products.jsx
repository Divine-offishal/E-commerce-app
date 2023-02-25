import React from 'react'
import Fake from '../Data/Fake'

const Products = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-center text-2xl mb-6'>Products</h1>

    <div className=' grid grid-cols-3 items-center space-y-6 justify-items-center'>
      {Fake.map((item, index) => (
        <div key={index} className='h-64 w-56 bg-neutral-500'>
          <div className=' h-44 w-44 overflow-hidden mx-auto mt-6'>
            <img src={item.img} alt={item.name} className='h-full w-full object-cover hover:scale-125 transition-all ease-in-out duration-300'/>
          </div>
          <h1 className='text-center my-2'>{item.name}</h1>
        </div>
      ))}

    </div>
    </div>
  )
}

export default Products