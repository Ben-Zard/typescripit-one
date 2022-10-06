
import React, { createContext } from 'react';
export interface ICart {
    id: number;
    name: string;
    description: string;
    price: number;
    amount: number;
  }

export type CartContextType = {
    totalAmount: number;
    cartitem: ICart[];
    addCart: (cart: ICart) => void;
    removeCart: (id: number) => void;
  };

  const defalutCart={
    cartitem:[
{   
    id: 0,
    name: '',
    description: '', 
    price: 0,
    amount: 0
}
],
totalAmount: 0 as number,
    addCart: () => {},
    removeCart: () => { }
  }

export const CartContext = createContext<CartContextType |undefined| null>(defalutCart);