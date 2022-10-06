import React, { useContext, useRef, useState } from "react";
import { CartContext, CartContextType } from "../../../store/cart-contex";
import Input from "../../UI/Input";

type Props = {
  id: number;
  addItemToCart(amount: number): void;
};

const MealItemForm = ({ addItemToCart, id }: Props) => {

  const amountInput = useRef<any>(1);
  const [isvalid, setisValid] = useState<boolean>(true);

  const submitHandler = (e:any) => {
    e.preventDefault()
    const enteredAmount:string = amountInput.current.value;
    const enteredAmountNum = +enteredAmount;
    if (enteredAmountNum < 1 || enteredAmount.trim().length === 0) {
      setisValid(false);
      return;
    }
    console.log(enteredAmountNum)
    addItemToCart(enteredAmountNum)
  };

  return (
    <div className="form"onClick={submitHandler} >
      <Input
        ref={amountInput}
        id={id}
        label="Amount"
        input={{
          type: "number",
          min: 0,
          max: 10,
          step: 1,
          defaultValue: 0,
        }}
      />

      <button>Add</button>
      {!isvalid && <p> Please enter a valid amount</p>}
    </div>
  );
};
export default MealItemForm;
