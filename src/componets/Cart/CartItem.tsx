import React, { useContext } from 'react'
import { CartContext, ICart } from '../../store/cart-contex';

type Props = {
    name: string;
    key:any;
    amount:number;
    price: number;
    onAdd: any;

}

const CartItem = ({name,price,amount,onAdd}: Props) => {
 
  return (
    <li className = 'cart-item'>
    <div>
        <h2>{name}</h2>
        <div className = 'summary'>
            <span className = 'price'>{`$${price}`}</span>
            <span className = 'amount'>x {amount}</span>
        </div>
    </div>
    <div className = 'actions'>
        <button onClick = {()=>{onAdd()}}> + </button>
        <button onClick = {()=>{}}> - </button>
    </div>
    </li>
  )
}
export default CartItem