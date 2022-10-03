import React,{useContext} from 'react'
import CartCtx from "../../store/cart-contex"
interface Props {
  showhandleCart:(()=> any)
};
const HeaderCart = ({showhandleCart}:Props) => {
  const cartctx = useContext(CartCtx)

  const numberCartItems = cartctx.items.reduce((curnum: any, item: any)=>{
    return curnum + item.totalamount;
  }, 0);

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