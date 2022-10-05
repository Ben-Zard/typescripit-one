import Modal from '../UI/Modal'

interface Props {
    hidehandleCart: ()=> void;
}

const Cart = ({hidehandleCart}:Props) => {
    const cartItems = (
    <ul className = 'cart'>
        {[{id: "1",name: "name", amount: 2, price: 10.99}].map((item)=>(
        <><li>{item.name}</li><li>{item.amount}</li></>
        ))}
    </ul>
    );
  return (
    <> 
        <Modal>
        {cartItems}
        <div className = 'total'>
            <span>Total Amount </span>
            <span>5 </span>
            </div>
        <div className = "actions">
            <button className = 'buttonalt' onClick = {hidehandleCart}>Close</button> 
            <button className = 'button'onClick = {hidehandleCart}> Order</button> 
        </div>
    </Modal>
</>
   
  );
}

export default Cart