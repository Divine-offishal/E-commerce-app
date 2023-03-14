import React, { useEffect } from 'react'
import { AddItem, RemoveItem, InitValue, Decrease } from './Action';

const Reducer = (state, action) => {
  const product = action.payload
  
  switch (action.type) {
    // return {
      //   ...state,
      //   items: [...state.items, action.payload]
      
      // }
   
    case AddItem:
      const exist = state.items.find((x) => x.id === product.id);
      if (exist) {
        return {
          ...state,
          items: state.items.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...product,
              qty: 1,
            },
          ]
        }}
      ;

    case RemoveItem: 
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case Decrease: 
      const check = state.items.find((x) => x.id === product.id);
      if(check.qty === 1){
        return {
          ...state, 
          items: state.items.filter(item => item.id !== product.id)
          
        }
      } else {
        return {
          ...state,
          items: state.items.map((x) => x.id === product.id ? {...x, qty: x.qty-1} : x)
        }
      }
      ;


    case InitValue: 
      {return action.payload};
  
    default:
      return state;
  }
}
 

export default Reducer