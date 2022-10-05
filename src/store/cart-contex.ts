
import React, { createContext } from 'react';
export interface ICart {
    id: number;
    name: string;
    description: string;
    price: number;
    amount: number;
  }

export type CartContextType = {
    cartitem: ICart[];
    addCart: (cart: ICart) => void;
    removeCart: (id: number) => void;
  };

  const defalutCart={
    cartitem:[
{   
    id: 0,
    name: 'string',
    description: 'string', 
    price: 0,
    amount: 0
}
],
    addCart: () => {},
    removeCart: () => { }
  }

export const CartContext = createContext<CartContextType | null>(defalutCart);