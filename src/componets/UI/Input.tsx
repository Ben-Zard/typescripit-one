import React, { forwardRef, Ref } from 'react'

type Props = {
    input:any,
    id:any,
    label:string
}


export const Input= React.forwardRef((props: Props, ref: Ref<any> ) => {


  return (
    <div className = 'input'>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref = {ref} {...props.input} />
    </div>
  )
});

export default Input
