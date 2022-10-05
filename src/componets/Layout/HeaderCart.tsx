import React,{useContext} from 'react'
import {CartContext, CartContextType, ICart} from '../../store/cart-contex'
interface Props {
  showhandleCart:(()=> any)
};
const HeaderCart = ({showhandleCart}:Props) => {
//  const cartctx = useContext<any>(CartContext)
 const { cartitem,addCart } = useContext(CartContext) as CartContextType;
const numberCartItems = cartitem.length;
    console.log(numberCartItems)

  return (
    <>
    <button className="button" onClick ={showhandleCart}>
    <span className="icon">I</span>
    <span>Your Cart</span>
    <span className="badge">{numberCartItems}</span>
    </button>
    </>
  )
}

export default HeaderCart