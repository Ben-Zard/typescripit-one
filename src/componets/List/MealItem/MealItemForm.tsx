import React from 'react'
import Input from '../../UI/Input'

type Props = {
    id:string,
}

const MealItemForm = ({id}: Props) => {
  return (
    <div className = "form">
        <Input input = {{
    type:"number",
    min: 0,
    max: 10,
    step: 1,
    defaultValue:1
    }} 
    id = {id}
    label = "Amount"/>
        <button> Add</button>
    </div>
  )
}
export default MealItemForm