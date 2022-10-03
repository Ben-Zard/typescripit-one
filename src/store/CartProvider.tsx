import React, { useState, useContext, useReducer } from "react";
import CartCtx, { CartState } from "./cart-contex";

type Props = {
  children: React.ReactNode;
};

type ACTIONTYPE = { type: "ADD"; item: any } | { type: "DEC"; id: any };

const defaultCartState:CartState = {
    items: [] = [],
    totalAmount: 5,
}
const cartReducer = (state: typeof defaultCartState, action: ACTIONTYPE) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return{
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
    // else if (action.type === "DEC") {}
  }
  return defaultCartState;
};

const CartProvider = ({ children }: Props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCart = (type: ACTIONTYPE,item: any) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemToCart = (type: ACTIONTYPE, id: any) => {
  dispatchCartAction({
    type: "DEC",
    id: id,
  });
};
  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCart,
    removeItems: removeItemToCart,
  };
  return <CartCtx.Provider value={CartContext}>{children} </CartCtx.Provider>;
};

export default CartProvider;
