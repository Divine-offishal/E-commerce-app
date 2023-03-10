import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'

const Products = () => {

  const [products, setProducts] = useState(null)

  // Makes a fetch request and stores the data inside the above state
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch(error => toast.error(error, {
              duration: 4000,
              position: 'top-center',}));
  }, [])


  return (
    <div className='mt-20' >
      <Toaster/>
      <h1 className='text-center text-3xl font-semibold text-indigo-700 mb-6'>Products</h1>

      {/* <CardSkeleton/> */}

{/* Check if product is null and renders the item if not null else a loading page is rendered */}
    {products === null ? <h1 className='text-center text-4xl font-bold text-purple-500 animate-pulse'>Loading...</h1> : 
      <div className='flex overflow-x-scroll md:grid grid-cols-3 items-center md:justify-items-center snap-mandatory snap-x'>
        {products.map((item, index) => (
          <NavLink to={`/products/${item.id}`} key={index}>
            <div  className='mx-20 md:h-64 h-96 md:w-56 w-10/12 bg-indigo-800 overflow-hidden p-4 rounded-md my-6 snap-center'>
              <div className=' md:h-44 h-72 md:w-44 w-full md:p-0 px-4 pt-6 overflow-hidden mx-auto mt-6'>
                <img src={item.image} alt={item.title} className='h-full w-full object-cover hover:scale-125 transition-all ease-in-out duration-300'/>
              </div>
              <div className='flex ml-2 overflow-hidden pb-4'>
              <h1 className=' my-2 text-purple-400 font-semibold text-2xl'>{item.title}</h1>
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