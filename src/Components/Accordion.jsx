import React, { useState } from 'react'
import AccordionData from '../Data/AccordionData'
import {IonIcon} from '@ionic/react'
import {addOutline} from 'ionicons/icons'

const Accordion = () => {

  
  const [accrdArr, setAccArr] = useState(AccordionData)
  const [accId, setAccId] = useState(null)

  const handleClick = (id) => {
      if (id === accId) {
        setAccId(null)
      }

      setAccId(id)



      // setAccArr(prevAccArr => {
      //   const newArray = []
      //   for (let index = 0; index < prevAccArr.length; index++) {
      //     const currentArray = prevAccArr[index];
      //     if (currentArray.id === id) {
      //       const newObj = {
      //         ...currentArray,
      //         open: !currentArray.open
      //       }
      //       newArray.push(newObj)
      //     } else {
      //       newArray.push(currentArray)
      //     }
          
      //   }
      //   return newArray
      // })
    
  }


  return (
    <div className='my-32 '>
      <div className='h-auto w-10/12 bg-slate-500 pt-2 pb-6 mb-2 md:ml-32 ml-6'>
        
        {AccordionData.map((item, index) => (
          <div key={index} className=' cursor-pointer mb-4'>
            <div className='flex my-2 justify-between items-center' onClick={() => handleClick(item.id)}>
              <h1>{item.title}</h1>
              <IonIcon icon={addOutline}/>
              {/* <h1>Vlose</h1> */}
            </div>
            <div className={`bg-neutral-50 w-full ${item.id === accId ? 'h-32 opacity-100 transition-all ease-in-out duration-500' : 'h-0 opacity-0 transition-all ease-in-out duration-500'} `}>
                {item.content}
            </div>

            <hr/>
          </div>
        ))}

      </div>
    </div>
  )}


export default Accordion