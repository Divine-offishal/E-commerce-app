import React, { useContext, useEffect, useState} from 'react'
import { Context } from '../Context/Context'
import EmptyCart from './CartComponents/EmptyCart'
import toast, {Toaster} from 'react-hot-toast'
import { IonIcon } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { chevronForwardOutline } from 'ionicons/icons'

const Cart = () => {

  // Get items array from contextAPI
   const { items, Remove, DecreaseItem, Add } = useContext(Context)

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
          <img src={item.image} alt={item.title} className='md:h-64 h-44 md:w-3/12 w-40 m-4 object-fit'/>
        {/* <div className='w-3/12 ml-10'>
        </div> */}
        <div className='mx-4 w-9/12'>
          <h1 className='text-xl font-medium text-indigo-800 my-4'>{item.title}</h1>
          {/* This button removes the item from local storage */}
          <div className='flex'>
            <div className='text-3xl mr-4' onClick={() => DecreaseItem(item)}><IonIcon icon={chevronBackOutline}/></div>
            <h1 className='text-xl'>{item.qty}</h1>
            <div className='text-3xl ml-4' onClick={() => Add(item)}><IonIcon icon={chevronForwardOutline}/></div>
          </div>
          <div className='my-4 text-2xl '>
            <h1>Price: ${Math.round(item.qty * item.price)}</h1>
          </div>
          <div className='btn-primary' onClick={() => handleRemove(item.id)}>Remove</div>
        </div>
        
      </div>
      <hr style={{width: '100%', color: 'black', fontWeight: 700}}/>

      
    </>
   ))

  //  Checks for the total price of all the items 
   let totalPrice = items.reduce(
    (acc, currentVal) => {return acc + currentVal.price * currentVal.qty}, 0
   )


  return (
    <div className=' mt-32 min-h-screen'>
      <Toaster/>
      <h1 className='text-5xl text-center font-bold text-indigo-800'>Cart</h1>
      {/* Check if the length of the items is greater than zero to render mapped items else render an empty cart page */}
      { items.length > 0 ? mapped : <EmptyCart/>}
      <div className='text-center my-6'>
        <h1 className='text-4xl font-bold'>Total: ${Math.round(totalPrice)}</h1>
      </div>

      <div className='h-10 w-32 text-purple-500 font-bold text-2xl text-center bg-indigo-800 mx-auto my-10'>
        <h1>Checkout</h1>
      </div>
    </div>
  )
}

export default Cart