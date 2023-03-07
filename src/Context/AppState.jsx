import React, {useEffect, useReducer, useState} from 'react'
import { Context } from './Context'
import Reducer from './Reducer'
import { AddItem, RemoveItem, InitValue } from './Action'

const AppState = (props) => {

  const initialState = {
    items: []
  }


  const [state, dispatch] = useReducer(Reducer, JSON.parse(localStorage.getItem("myState")) || initialState)


// Check if the state.item is greater than 0 to save the item into the localStorage
  useEffect(() => {
    const stateContent = state.items

    if (stateContent.length > 0) {
      localStorage.setItem('item', JSON.stringify(stateContent))
    }
  
    
  }, [state])
  
  
  const Add = (item) => {
    dispatch({
      type: AddItem,
      payload: item
    })
  } 


  return (
    <Context.Provider value={{
      items: state.items,
      Add
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default AppState