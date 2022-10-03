
import React, { createContext } from 'react';

type ContextState = {
    items: {amount?:any,
    description?:any,
    price?:any,
    id?:any,
    name?:any,
}[],
    totalAmount: number,
    addItem?:( ) => any,
    removeItem?: (id:any) => any 
}

 const Context:ContextState = {
    items: [],
    totalAmount: 5,
    addItem:() => Context.items,
    removeItem: (id: any) => id,
    }

 export type CartState = ContextState;
// const CartCtx = createContext<ContextState>(CartContext);
const CartCtx = createContext<ContextState>(Context)
export default CartCtx;
// export default CartCtx;