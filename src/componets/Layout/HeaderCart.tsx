import React,{useContext} from 'react'
import {CartContext} from '../../store/cart-contex'
interface Props {
  showhandleCart:(()=> any)
};
const HeaderCart = ({showhandleCart}:Props) => {
  const cartCTX =useContext(CartContext)

const total = cartCTX!.cartitem.reduce((curNumber, item) => {
  return curNumber + item.amount ;
}, 0);



  return (
    <>
    <button className="button" onClick ={showhandleCart}>
    <span className="icon">I</span>
    <span>Your Cart</span>
    <span className="badge">{total}</span>
    </button>
    </>
  )
}

export default HeaderCart