import React from 'react'
import { useParams } from 'react-router'
import Fake from '../Data/Fake'

const Product = () => {

  const { name } = useParams()
  const SearchData = Fake.find(Product => Product.name === name)

  return (
    <div>
      <div>
        <img src={SearchData.img} alt={SearchData.name} />
      </div>
    </div>
  )
}

export default Product