import React from 'react'

type Props = {
    input:any,
    id: string,
    label:string
}

const Input = ({input,label,id}: Props) => {
  return (
    <div className = 'input'>
        <label htmlFor={input.id}>{label}</label>
        <input id = {input.id} {...input}/>
    </div>
  )
}

export default Input