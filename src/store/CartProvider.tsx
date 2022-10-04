 import React, { useState, useContext, useReducer ,createContext, Reducer} from "react";
// import CartCtx, from "./cart-contex";

// type Props = {
//   children: React.ReactNode;
// };

// type ACTIONTYPE = { type: "ADD"; item: any } | { type: "DEC"; id: any };

// const defaultCartState = {
//     items: [] = [],
//     totalAmount: 5,
// }
// const cartReducer = (state: typeof defaultCartState, action: ACTIONTYPE) => {
//   if (action.type === "ADD") {
//     const updatedItems = state.items.concat(action.item);
//     const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
//     return{
//         items: updatedItems,
//         totalAmount: updatedTotalAmount
//     }
//     // else if (action.type === "DEC") {}
//   }
//   return defaultCartState;
// };

// const CartProvider = ({ children }: Props) => {
//   const [cartState, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   );
//   const addItemToCart = (type: ACTIONTYPE,item: any) => {
//     dispatchCartAction({
//       type: "ADD",
//       item: item,
//     });
//   };
//   const removeItemToCart = (type: ACTIONTYPE, id: any) => {
//   dispatchCartAction({
//     type: "DEC",
//     id: id,
//   });
// };
//   const CartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItems: addItemToCart,
//     removeItems: removeItemToCart,
//   };
//   return <CartCtx.Provider value={CartContext}>{children} </CartCtx.Provider>;
// };

// export default CartProvider;








// import {IMealList} from '../componets/interface'
// import {CountStateContext} from './cart-contex'
// type cart = {
//   item:IMealList[],
//   totalAmount: number,
//   // addItem?:( ) => any,
//   // removeItem?: (id:any) => any 
// }
// type ProviderProps = {children: React.ReactNode}
// type Actions = { type: "ADD"; item: any } | { type: "DEC"; id: any };
// function countReducer(state : cart, action:Actions) {
//     switch (action.type) {
//       case 'ADD': {
//         return {state}
//       }
//       case 'DEC': {
//         return {state}
//       }
//       default: {
//         throw new Error(`Unhandled action type: `)
//       }
//     }
// }


//   function CartProvider({children}:ProviderProps) {
//     const CartContext = {
//            item: [],
//            totalAmount: 0,
//       //     addItems: addItemToCart,
//       //     removeItems: removeItemToCart,
//          };
//     const [state, dispatch] = React.useReducer(countReducer,CartContext); 
//     const value = {state, dispatch}

//    return <CountStateContext.Provider value={value}>{children} </CountStateContext.Provider>;
//  };

//  export default CartProvider;


//  import * as React from 'react'








import {Cart} from '../componets/interface'

type Action = { type: "ADD"; item: any } | { type: "DEC"; id: any };
type Dispatch = (action: Action) => void
type CountProviderProps = {children: React.ReactNode}

const initialCart: Cart = {
  item:[{ id: '', name: '',description: '',price: 0}],
  total: 0
  }

const CountStateContext = createContext<
  {state: Cart[]; dispatch: Dispatch} | undefined
>(undefined)

function countReducer(state: any , action: Action):any {
  switch (action.type) {
    case 'ADD': {
      return {state}
    }
    default: {
      throw new Error (); 
    }
  }
}

function CountProvider({children}: CountProviderProps) {
  const [state, dispatch] = useReducer(countReducer, initialCart)
const value = {state,dispatch}
  return (
    <CountStateContext.Provider value={value}>
      {children}
    </CountStateContext.Provider>
  )
}

// function useCount() {
//   const context = React.useContext(CountStateContext)
//   if (context === undefined) {
//     throw new Error('useCount must be used within a CountProvider')
//   }
//   return context
// }

export {CountProvider}