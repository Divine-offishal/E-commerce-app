import { IonIcon } from '@ionic/react'
import { cart } from 'ionicons/icons'
import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Context } from '../Context/Context'
import { NavHashLink } from 'react-router-hash-link'


const Navbar = () => {

  const {items} = useContext(Context)
  const lengthOfArray = items.length
  const location = useLocation()

  return (
    <div className='h-20 w-screen text-purple-400 bg-indigo-800 md:flex hidden items-center fixed top-0 left-0 z-50'>
      <NavLink to='/' >
        <h1 className=' text-4xl font-bold ml-6'>Virtual Mall</h1>
      </NavLink>

      <div className='flex ml-auto text-lg items-center mr-10'>
      <NavHashLink smooth to='/#Home' className={
          `${location.pathname}${location.hash}` === '/#Home'? "text-neutral-50" : "text-purple-400"}>
          <h1 className='mx-2'>Home</h1>
        </NavHashLink>
        <NavHashLink smooth to='/#Contact' className={
          `${location.pathname}${location.hash}` === '/#Contact'? "text-neutral-50" : "text-purple-400"}>
          <h1 className='mx-2'>Contact us</h1>
        </NavHashLink>

        <NavHashLink smooth to='/#About' className={
          `${location.pathname}${location.hash}` === '/#About'? "text-neutral-50" : "text-purple-400"}>
          <h1 className='mx-2'>About Us</h1>
        </NavHashLink>


        <NavLink to='/cart' className={({isActive}) => {
        return isActive ? 'text-neutral-50' : 'text-purple-400'
      }}>
          <div className='relative'>
            <div className='text-3xl'>
              <IonIcon icon={cart} />
            </div>
            <div className=' absolute top-0 right-0 bg-red-500 text-sm rounded-full text-center text-neutral-50 h-4 w-4'>
              <h1>{lengthOfArray}</h1>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar