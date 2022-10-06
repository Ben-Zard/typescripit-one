// import * as React from 'react';
// import {ICart,CartContext, CartContextType } from './cart-contex';

import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useReducer } from "react";
import { CartContext } from "./cart-contex";

// type Props ={
//     children: any
// }

// const TodoProvider = ({ children }:Props) => {
//   const [cartitem, setCart] = React.useState<ICart[]>([]);
//   const addCart = (cart: ICart) => {
//     const newCart:ICart = {
//       id: Math.random(), // not really unique - but fine for this example
//       name: cart.name,
//       description: cart.description,
//       price: cart.price,
//       amount:cart.amount,
//     }        
//     setCart([...cartitem, newCart]);
//   };
//   const removeCart = (id: number) => {
//     cartitem.filter((cart: ICart) => {
//       if (cart.id === id) {

//         setCart([...cartitem]);
//       }
//     });
//   };
//   const cartContext = {
//     cartItems:cartitem,
//     totalamount: 0,
//     addItem: addCart,
//     removeItem: removeCart
//   }
//   return <CartContext.Provider value={{ cartitem, addCart, removeCart }}>{children}</CartContext.Provider>;
// };

// export default TodoProvider;

// const defaultCartState = {
//     items: [],
//     totalAmount: 0,
//   };
 const defaultCartState = {items:[{   
        id: 0,
        name: 'string',
        description: 'string', 
        price: 0,
    }],
totalAmount: 0,
    }

  type Action = {
    type: 'ADD', item:{   
        id: 0,
        name: '',
        description: '', 
        price: 0,
        amount: 0
    }
  }|{type: 'DEC', id: number}
  
  const cartReducer = (state: { totalAmount: number; items: any; }, action:Action ) => {
    if (action.type === 'ADD') {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
  
      const existingCartItemIndex = state.items.findIndex(
        (item: { id: any; }) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
  
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    if (action.type === 'DEC') {
      const existingCartItemIndex = state.items.findIndex(
        (item: { id: any; }) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item: { id: any; }) => item.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }
  
    return defaultCartState;
  };
  
  const CartProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
    const [cartState, dispatchCartAction] = useReducer(
      cartReducer,
      defaultCartState
    );
  
    const addItemToCartHandler = (item: any) => {
      dispatchCartAction({ type: 'ADD', item: item });
    };
  
    const removeItemFromCartHandler = (id: any) => {
      dispatchCartAction({ type: 'DEC', id: id });
    };
  
    const cartContext = {
    cartitem: cartState.items,
      totalAmount: cartState.totalAmount,
      addCart: addItemToCartHandler,
      removeCart: removeItemFromCartHandler,
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;