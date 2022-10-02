import React from 'react'
interface Props {
  showhandleCart:(()=> void)
};

const HeaderCart = ({showhandleCart}:Props) => {
  return (
    <>
    <button className="button" onClick ={showhandleCart}
>
{/* <input onChange ={(e) =>handletodo(e.target.value)}/> */}
    <span className="icon">I</span>
    <span>Your Cart</span>
    <span className="badge">0</span>
    </button>
    </>
  )
}

export default HeaderCart