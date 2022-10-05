import List from "./componets/List/List";
import Header from "./componets/Layout/Header";
import "./styles/main.scss";
import Cart from "./componets/Cart/Cart";
import { ChangeEvent, useState } from "react";
import React from "react";
import TodoProvider from "./store/CartProvider";


function App() {
  const [showCart, setshowCart] = useState<boolean>(false);
  // const [todo,setTodo] = useState<string>('');

  const showhandleCart =():void => {
    setshowCart(true);
  };
  const hidehandleCart = (): void => {
    setshowCart(false);

  };

  
  return (
    <>
     {/* <TodoProvider> */}
    {showCart && <Cart hidehandleCart = {hidehandleCart} />}
      <Header showhandleCart = {showhandleCart}/>
      <main>
        <List />
      </main>

    {/* </TodoProvider> */}
    </>
  );
}

export default App;
