import React,{useContext} from "react";
import {IMealList} from "../../interface"
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-contex";
// interface mealsList {
//     name:string,
//     description:string,
//     price:number,
// }


const MealItem = ({name,description,price,id}: IMealList) => {
const cartCTX =useContext(CartContext)

const addItemToCart = (amount:number) => {
  //  cartCTX!.addItem()
}

  return (
    <li className="meal">
      <div>
        <h3>{name} </h3>
    <div className="description">{description}</div> 
    <div className="price">{`$${price.toFixed(2)}`}</div> 
      </div>
      <div>
      <MealItemForm id = {id} addItemToCart={addItemToCart}/>
      </div>
    </li>
  );
};

export default MealItem;
