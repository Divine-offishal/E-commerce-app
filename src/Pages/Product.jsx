import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Fake from '../Data/Fake'

const Product = () => {

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
  const { name } = useParams()

  // Checks if products is null before rendering else to render a loading page
  if(products !== null) {

    // Checks for the product whose name matches the route parameter and renders them
    const SearchData = products.find(Product => Product.title === name)
  
    
  
    return (
      <div  className='h-screen w-screen'>
        <div>
          <img src={SearchData.image} alt={SearchData.title} />
            <h1>{SearchData.title}</h1>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className='h-screen'>
        <h1 className=' text-5xl font-bold'>Loading...</h1>
      </div>
    )
  }
}

export default Product