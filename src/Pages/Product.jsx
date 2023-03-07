import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Fake from '../Data/Fake'
import { IonIcon } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { chevronForwardOutline } from 'ionicons/icons'
import { Context } from '../Context/Context'

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
      console.log(items);
    }
    
    return (
      <div  className='h-screen w-screen mt-32' >
        <div className='flex'>
          <img src={SearchData.image} alt={SearchData.title} className='h-72 w-72 m-4'/>
          <div className=' h-96 w-9/12  bg-indigo-800 p-6'>
            <h1 className='text-3xl text-purple-400 font-bold ml-4 my-4'>{SearchData.title}</h1>
            <h1 className='text-purple-100'>{SearchData.description}</h1>
            <div className='flex items-center justify-center mt-2'>

              <div className='text-5xl text-purple-500'>
                <IonIcon icon={chevronBackOutline}/>
              </div>

              <div className='mt-6'>
                <div className='h-10 w-20 ml-5 mb-4 bg-purple-500 text-indigo-900 text-center text-4xl font-bold'>
                  <h1>1</h1>
                </div>

                <div className='btn-primary cursor-pointer' onClick={() => handleClick()}>
                    <h1>Add to cart</h1>
                </div>
                
              </div>

              <div className='text-5xl text-purple-500'>
                <IonIcon icon={chevronForwardOutline}/>
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