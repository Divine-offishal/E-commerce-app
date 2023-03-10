import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const CardSkeleton = () => {
  return (
    <div className='md:h-64 h-96 md:w-56 w-10/12'>
      <div className='md:h-44 h-72 md:w-44 w-full'>
        <Skeleton/>
      </div>
    </div>
  )
}

export default CardSkeleton