import { useContext, useState } from 'react';
import { CartContext, ICart } from '../../store/cart-contex';
import Modal from '../UI/Modal';
import CartItem from './CartItem'
interface Props {
    hidehandleCart: ()=> void;
}

const Cart = ({hidehandleCart}:Props) => {
    const cartCTX =useContext(CartContext);
    const cartItemRemove = () => {
        // cartCTX!.addCart(cartItems)
    }

    const cartItemAdd = (item:any,amount:number) => {
        cartCTX!.addCart(item)
    }

    const totalAmount = cartCTX!.totalAmount;
    const haveitems = cartCTX!.cartitem.length > 1;
    const cartItems:any = (
    <ul className = 'cart'>
    {cartCTX!.cartitem.map((item:ICart) => (   
            <CartItem 
            key ={item.id}
            name = {item.name}
            amount = {item.amount}
            price = {item.price}
            // onRemove = {cartItemRemove}
            onAdd = {cartItemAdd}/>))}
     
    </ul>
    );
  return (
    <> 
        <Modal>
        {cartItems}
        <div className = 'total'>
            <span>Total Amount </span>
            <span>{totalAmount} </span>
            </div>
        <div className = "actions">
            <button className = 'buttonalt' onClick = {hidehandleCart}>Close</button> 
        {haveitems && <button className = 'button'> Order</button> }
        </div>
    </Modal>
</>
   
  );
}

export default Cart