import React, { forwardRef, Ref } from 'react'

type Props = {
    input:any,
    id:any,
    label:string
}
export type ref = any;

export const Input= React.forwardRef((props: Props, ref: Ref<any> ) => {
  const total = {};
  return (
    <div className = 'input'>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref = {ref} id = {props.input.id}{...props.input} />
    </div>
  )
});

export default Input

// export const FancyButton = forwardRef<Ref, Props>((props, ref) => (
//   <button ref={ref} className="MyClassName" type={props.type}>
//     {props.children}
//   </button>