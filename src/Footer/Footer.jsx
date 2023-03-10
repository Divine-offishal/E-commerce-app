import React from 'react'
import { firstRow, secondRow, thirdRow, fourthRow } from '../Data/FooterData'

const Footer = () => {
  return (
      <div className='w-screen md:h-56 bg-indigo-700 text-neutral-50 pt-6' id='Contact'>
        <div className='md:flex items-center justify-between md:ml-0 ml-4'>
          <div>
            <h1 className='text-3xl font-bold'>Virtual Mall</h1>
          </div>
          <div>
            {
              firstRow.map((item, index) => (
                <h1 className='text-xl font-medium text-purple-500 md:m-0 my-6' key={index}>{item.title}</h1>
              ))
            }
          </div>
          <div>
            {
              secondRow.map((item, index) => (
                <h1 className='text-xl font-medium text-purple-500 md:m-0 my-6' key={index}>{item.title}</h1>
              ))
            }
          </div>
          <div>
            {
              thirdRow.map((item, index) => (
                <h1 className='text-xl font-medium text-purple-500 md:m-0 my-6' key={index}>{item.title}</h1>
              ))
            }
          </div>
          <div>
            {
              fourthRow.map((item, index) => (
                <h1 className='text-xl font-medium text-purple-500 md:m-0 my-6' key={index}>{item.title}</h1>
              ))
            }
          </div>
        </div>
        <h1>Copyright Enivid</h1>
      </div>
  )
}

export default Footer