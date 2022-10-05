import React,{useContext} from "react";
import { CartContext, CartContextType, ICart } from "../../../store/cart-contex";
import {IMealList} from "../../interface"
import MealItemForm from "./MealItemForm";

 interface Props {
    name:string,
    description:string,
    price:number,
    id:number
    // amount: number
}


const MealItem = ({name,description,price,id,}: Props) => {
 //const cartCTX =useContext(CartContext)
 const { addCart } = useContext(CartContext) as CartContextType;
const addItemToCart = () => {
  const cartitem = {id: id,
    name: +name,
    description: +description, 
    price: +price,
    // amount: +amount
  }  
  return cartitem
}
  return (
    <li className="meal">
      <div>
        <h3>{name} </h3>
    <div className="description">{description}</div> 
    <div className="price">{`$${price.toFixed(2)}`}</div> 
      </div>
      <div>
      <MealItemForm id = {id} addItemToCart={addItemToCart} />
      </div>
    </li>
  );
};

export default MealItem;
