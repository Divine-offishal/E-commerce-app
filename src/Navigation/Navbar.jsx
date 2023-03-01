import { IonIcon } from '@ionic/react'
import { cart } from 'ionicons/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 w-screen bg-blue-500 md:flex hidden items-center fixed top-0 left-0 z-50'>
      <NavLink to='/'>
        <h1 className=' text-4xl font-bold ml-6'>Logo</h1>
      </NavLink>

      <div className='flex ml-auto text-lg items-center mr-10'>
        <NavLink to='/'>
          <h1 className='mx-2'>Home</h1>
        </NavLink>
        <h1 className='mx-2'>About Us</h1>
        <h1 className='mx-2'>Contact us</h1>

        <NavLink to='/cart'>
          <div className='text-3xl'>
            <IonIcon icon={cart}/>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar