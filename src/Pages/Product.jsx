import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Fake from '../Data/Fake'
import { IonIcon } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { chevronForwardOutline } from 'ionicons/icons'
import { Context } from '../Context/Context'
import toast, { Toaster } from 'react-hot-toast';

const Product = () => {

  const { items, Add, TestBol, change} = useContext(Context)

  const [products, setProducts] = useState(null)

  // Makes a fetch request and stores the data into the above state 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
            .then(res=>res.json())
            .then(json=>setProducts(json))

            // if(products !== null){
            //   console.log(products[6].title);

            // }
  }, [])

  // Gets the paraeter of the dynamic route
  const { id } = useParams()

  // Checks if products is null before rendering else to render a loading page
  if(products !== null) {

    // Checks for the product whose name matches the route parameter and renders them
    const SearchData = products.find(Product => Product.id == id)

    const handleClick = () => {

      Add(SearchData)
      toast.success('Added to cart', { 
        duration: 4000,
        position: 'top-center',})
      // console.log(items)
    }
    
    return (
      <div  className='h-auto w-screen md:mt-32 mt-20 mb-10 md:mb-0' >
        <Toaster/>
        <div className='md:flex '>
          <div className='md:w-3/12 w-screen md:ml-4 '>
            <img src={SearchData.image} alt={SearchData.title} className='h-72 md:m-4 mx-auto'/>
          </div>
          <div className=' h-auto w-9/12 bg-indigo-800 p-6 mb-20 mx-auto md:mx-0'>
            <h1 className='text-3xl text-purple-400 font-bold ml-4 my-4'>{SearchData.title}</h1>
            <h1 className='text-purple-100'>{SearchData.description}</h1>
            <div className='flex items-center justify-center mt-2'>

              <div className='mt-6'>

                <button className='btn-primary cursor-pointer' onClick={() => handleClick()}>
                    <h1>Add to cart</h1>
                </button>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className='h-screen mt-32'>
        <h1 className=' text-5xl font-bold text-center text-purple-500 animate-pulse'>Loading...</h1>
      </div>
    )
  }
}

export default Product