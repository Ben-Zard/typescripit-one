import React from "react";
import HeaderCart from "./HeaderCart";

interface Props {
  // handletodo:((e:any )=> void)
  showhandleCart:(()=> void)
};

const Header = ({showhandleCart}:Props) => {

  return (
    <>
    <div className="header" >
      <h2>BestMeals</h2>
      <HeaderCart showhandleCart= {showhandleCart} />
      </div>
      <div className="main-image">  
      <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="" />
      </div>
      </>
  );
};

export default Header;
