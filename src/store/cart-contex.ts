
import React, { createContext } from 'react';
import {IMealList} from '../componets/interface'
import {Cart} from '../componets/interface'
    const initialCart: Cart = {
    item:[{ id: '', name: '',description: '',price: 0}],
    total: 0
    }

type Dispatch = (action: Actions) => void

 export const CountStateContext = createContext<{state: Cart[]; dispatch: Dispatch} | undefined>(undefined)



type Actions = { type: "ADD"; item: any } | { type: "DEC"; id: any };
function countReducer(state : Cart[], action:Actions) {
    switch (action.type) {
      case 'ADD': {
        return {state}
      }
      case 'DEC': {
        return {state}
      }
      default: {
        throw new Error(`Unhandled action type: `)
      }
    }
  }
type ProviderProps = {children: React.ReactNode}
  function CartProvider({children}:ProviderProps) {
    const defaultCartState = {

    }
    const [state, dispatch] = React.useReducer<any>(countReducer,defaultCartState); 
//   const CartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItems: addItemToCart,
//     removeItems: removeItemToCart,
//   };
return null
 };

 export default CartProvider;