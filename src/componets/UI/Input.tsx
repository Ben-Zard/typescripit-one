import React from 'react'

type Props = {
  ref: any,
    input:any,
    id:any,
    label:string
}

const Input = React.forwardRef(({input,label,ref}: Props) => {
  return (
    <div className = 'input'>
        <label htmlFor={input.id}>{label}</label>
        <input ref= {ref} id = {input.id} {...input} />
    </div>
  )
});

export default Input