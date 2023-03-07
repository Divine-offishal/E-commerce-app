import React, { useContext, useEffect, useState} from 'react'
import { Context } from '../Context/Context'

const Cart = () => {

   const { items } = useContext(Context)
   
   const [checkStorage, setCheckStorage] = useState(null)
   const search = JSON.parse(localStorage.getItem('item'))

  //  useEffect(() => {
  //   if(search) {

  //     setCheckStorage(search)
  //     console.log(items);
  //   }

  //  }, [])

   const handle = () => {
    console.log(items);
   }

   const mapped = items.map((item, index) => (
    <div key={index}>
      <h1>{item.title}</h1>
    </div>
   ))

  return (
    <div className='h-screen mt-32' onClick={handle}>
      <h1>Cart</h1>
      { items.length > 0 ? mapped : <h1>Your cart is empty</h1>}
    </div>
  )
}

export default Cart