import React, { useEffect } from 'react'
import { AddItem, RemoveItem, InitValue } from './Action';

const Reducer = (state, action) => {

  
  switch (action.type) {
    case AddItem:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case RemoveItem: 
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case InitValue: 
      {return action.payload};
  
    default:
      return state;
  }
}

export default Reducer