import React, { useState } from 'react'
import AccordionData from '../Data/AccordionData'
import {IonIcon} from '@ionic/react'
import {addOutline} from 'ionicons/icons'
import {removeOutline} from 'ionicons/icons'

const Accordion = () => {

  
  const [accrdArr, setAccArr] = useState(AccordionData)
  const [accId, setAccId] = useState(null)

// if accId is equal to the passed Id, change it to null else change it to accId
  const handleClick = (id) => {
    setAccId(id === accId ? null : id);
    
  }


  return (
    <div className='my-32' id='About'>
      <div className='h-auto w-10/12 bg-slate-500 pt-2 pb-2 mb-2 lg:ml-32 md:ml-20 ml-6'>
        {AccordionData.map((item, index) => (
          <div key={index} className=' cursor-pointer mb-4'>
            <div className='flex my-2 justify-between items-center' onClick={() => handleClick(item.id)}>
              <h1 className='text-neutral-50 text-xl font-medium pl-4'>{item.title}</h1>
              <div className='mr-4 text-neutral-50 text-xl'>
                {item.id === accId ? <IonIcon icon={removeOutline}/> : <IonIcon icon={addOutline}/>}
              </div>
            </div>
            <div className={`bg-neutral-50 overflow-scroll w-full ${item.id === accId ? 'h-32 opacity-100 transition-all ease-in-out duration-500' : 'h-0 opacity-0 transition-all ease-in-out duration-500'} `}>
                {item.id === accId && item.content}
            </div>

            <hr/>
          </div>
        ))}

      </div>
    </div>
  )}


export default Accordion