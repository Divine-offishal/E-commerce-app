import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Fake from '../Data/Fake'

const Products = () => {

  const [products, setProducts] = useState(null)

  // Makes a fetch request and stores the data inside the above state
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }, [])



  return (
    <div className='mt-20' >
      <h1 className='text-center text-2xl mb-6'>Products</h1>

{/* Check if product is null and renders the item if not null else a loading page is rendered */}
    {products === null ? <h1 className='text-center text-4xl font-bold text-purple-500 animate-pulse'>Loading...</h1> : 
      <div className='flex overflow-x-scroll md:grid grid-cols-3 items-center md:justify-items-center'>
        {products.map((item, index) => (
          <NavLink to={`/products/${item.title}`} key={index}>
            <div  className='mx-8 h-64 w-56 bg-indigo-800 overflow-hidden p-4 rounded-md my-6'>
              <div className=' h-44 w-44 overflow-hidden mx-auto mt-6'>
                <img src={item.image} alt={item.title} className='h-full w-full object-cover hover:scale-125 transition-all ease-in-out duration-300'/>
              </div>
              <div className='flex ml-2 overflow-hidden pb-4'>
              <h1 className=' my-2 text-purple-400 font-semibold'>{item.title}</h1>
              <h1 className='ml-2 my-2'>${item.price}</h1>
              </div>
            </div>
          </NavLink>
        ))}

      </div>
    }
    </div>
  )
}

export default Products