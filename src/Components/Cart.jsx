import React, { useContext, useEffect, useState} from 'react'
import { Context } from '../Context/Context'
import EmptyCart from './CartComponents/EmptyCart'
import toast, {Toaster} from 'react-hot-toast'

const Cart = () => {

  // Get items array from contextAPI
   const { items, Remove } = useContext(Context)

   const handleRemove = (id) => {
    // Call the remove function from context
    Remove(id)
    toast.success('Removed item from cart',{ 
    duration: 4000,
    position: 'top-center',})
    // Get the items from the storage, filter the items and set them back to local storage
    const checkStorage = JSON.parse(localStorage.getItem('item'))
    const RemoveItem = checkStorage.filter(item => item.id !== id)
    localStorage.setItem('item', JSON.stringify(RemoveItem))
   }

// Map through the items in the items array and place them in the cart
   const mapped = items.map((item, index) => (
    <>
      <div key={index} className='h-44 my-20 w-screen flex'>
        <div className='w-3/12 ml-10'>
          <img src={item.image} alt={item.title} className='h-44'/>
        </div>
        <div className='mx-4'>
          <h1 className='text-xl font-medium text-indigo-800 my-4'>{item.title}</h1>
          {/* This button removes the item from local storage */}
          <div className='btn-primary' onClick={() => handleRemove(item.id)}>Remove</div>
        </div>
        
      </div>
      <hr style={{width: '100%', color: 'black', fontWeight: 700}}/>
    </>
   ))


  return (
    <div className=' mt-32 min-h-screen'>
      <Toaster/>
      <h1 className='text-5xl text-center font-bold text-indigo-800'>Cart</h1>
      {/* Check if the length of the items is greater than zero to render mapped items else render an empty cart page */}
      { items.length > 0 ? mapped : <EmptyCart/>}
    </div>
  )
}

export default Cart