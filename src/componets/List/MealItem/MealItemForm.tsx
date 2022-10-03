import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

type Props = {
  id: string;
  addItemToCart(amount: number): void;
};

const MealItemForm = ({ addItemToCart, id }: Props) => {
  const amountInput = useRef<any>();

  const [isvalid, setisValid] = useState<boolean>(true);

  const submitHandler = (e: any) => {
    // e.preventDefault();
    console.log("h")
    const enteredAmount = amountInput.current!.value;
    const enteredAmountNum = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNum < 1) {
      setisValid(false);
      return;
    }


    addItemToCart(enteredAmountNum)
  };

  return (
    <div className="form"onSubmit={submitHandler} >
      <Input
        ref={amountInput}
        id={id}
        label="Amount"
        input={{
          type: "number",
          min: 0,
          max: 10,
          step: 1,
          defaultValue: 1,
        }}
      />

      <button > Add</button>
      {!isvalid && <p> Please enter a valid amount</p>}
    </div>
  );
};
export default MealItemForm;
