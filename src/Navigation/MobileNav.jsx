import { IonIcon } from '@ionic/react'
import { reorderThree } from 'ionicons/icons'
import { cart } from 'ionicons/icons'
import React, { useState, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Context } from '../Context/Context'
import {NavHashLink} from 'react-router-hash-link'


const MobileNav = () => {

  const [open, setOpen] = useState(false)
  const { items } = useContext(Context)
  const lengthOfArray = items.length
  const location = useLocation()

  return (
    <>
      <div className=' h-20 w-screen bg-indigo-800 flex items-center md:hidden px-2 fixed top-0 left-0 z-50'>
        <NavLink to='/' className={({isActive}) => 
            {return isActive? 'text-neutral-50' : 'text-purple-500'}}>
          <h1 className='text-3xl font-bold text-purple-500'>Virtual Mall</h1>
        </NavLink>

        <div className='text-5xl text-purple-500 ml-auto flex'>
          <NavLink to='/cart' className={({isActive}) => 
            {return isActive? 'text-neutral-50' : 'text-purple-500'}}>
            <div className='relative'>
              <IonIcon icon={cart} />
              {lengthOfArray > 0 && <div className="absolute top-0 right-0 bg-red-500 text-neutral-50 rounded-full text-sm z-40 h-6 w-6 text-center">
                <h1 className='mt-1'>{lengthOfArray}</h1>
              </div>}
            </div>
            </NavLink>

          <div onClick={() => setOpen(!open)}>
            <IonIcon icon={reorderThree}/>
          </div>
        </div>

      </div>
        <div className={`h-screen w-1/2 transition-all ease-in-out duration-200 text-center text-3xl font-bold text-indigo-800 pt-32 bg-purple-500 fixed z-40 md:hidden top-0 ${open? 'right-0' : 'right-[-500px]'}`}>
          <ul>
          <NavHashLink smooth to='/#Home' className={
              `${location.pathname}${location.hash}` === '/#Home'? "text-neutral-50" : "text-purple-400"}>
              <li className='my-10' onClick={() => setOpen(!open)}>Home</li>
            </NavHashLink>
            <NavHashLink smooth to='/#About' className={
              `${location.pathname}${location.hash}` === '/#About'? "text-neutral-50" : "text-purple-400"}>
              <li className='my-10' onClick={() => setOpen(!open)}>Contact us</li>
            </NavHashLink>
            <NavHashLink smooth to='/#Contact' className={
              `${location.pathname}${location.hash}` === '/#Contact'? "text-neutral-50" : "text-purple-400"}>
              <li className='my-10' onClick={() => setOpen(!open)}>About us</li>
            </NavHashLink>
          </ul>
        </div>
    </>
  )
}

export default MobileNav