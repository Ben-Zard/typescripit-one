import React from "react";
import {IMealList} from "../../interface"
import MealItemForm from "./MealItemForm";
// interface mealsList {
//     name:string,
//     description:string,
//     price:number,
// }

const MealItem = ({name,description,price,id}: IMealList) => {
  return (
    <li className="meal">
      <div>
        <h3>{name} </h3>
    <div className="description">{description}</div> 
    <div className="price">{`$${price.toFixed(2)}`}</div> 
      </div>
      <div>
      <MealItemForm id = {id}/>
      </div>
    </li>
  );
};

export default MealItem;
