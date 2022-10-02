import Modal from '../UI/Modal'

type Props = {
}

const Cart = () => {
    const cartItems = (
    <ul className = 'cart'>
        {[{id: "1",name: "name", amount: 2, price: 10.99}].map((item)=>(
        <li>{item.name}</li>
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
            <button className = 'buttonalt'>Close</button> 
            <button className = 'button'> Order</button> 
        </div>
    </Modal>
</>
   
  );
}

export default Cart