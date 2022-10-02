import List from "./componets/List/List";
import Header from "./componets/Layout/Header";
import "./styles/main.scss";
import Cart from "./componets/Cart/Cart";
import { ChangeEvent, useState } from "react";
function App() {
  const [showCart, setshowCart] = useState<boolean>(false);
  // const [todo,setTodo] = useState<string>('');

  const showhandleCart =():void => {
    setshowCart(true);
  };
  const hidehandleCart = (): void => {
    setshowCart(false);

  };

  // const handletodo = (): void => {
  //   setTodo('1')
  //   console.log(todo)
  // };
  
  return (
    <>
    {showCart && <Cart hidehandleCart = {hidehandleCart} />}
      <Header showhandleCart = {showhandleCart}/>
      <main>
        <List />
      </main>
    </>
  );
}

export default App;
