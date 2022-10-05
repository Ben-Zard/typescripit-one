import * as React from 'react';
import {ICart,CartContext, CartContextType } from './cart-contex';

type Props ={
    children: any
}

const TodoProvider = ({ children }:Props) => {
  const [cartitem, setCart] = React.useState<ICart[]>([]);
  const addCart = (cart: ICart) => {
    const newCart:ICart = {
      id: Math.random(), // not really unique - but fine for this example
      name: cart.name,
      description: cart.description,
      price: cart.price,
      amount:cart.amount,
    }        
    setCart([...cartitem, newCart]);
  };
  const removeCart = (id: number) => {
    cartitem.filter((cart: ICart) => {
      if (cart.id === id) {

        setCart([...cartitem]);
      }
    });
  };
  const cartContext = {
    cartItems:cartitem,
    totalamount: 0,
    addItem: addCart,
    removeItem: removeCart
  }
  return <CartContext.Provider value={{ cartitem, addCart, removeCart }}>{children}</CartContext.Provider>;
};

export default TodoProvider;

