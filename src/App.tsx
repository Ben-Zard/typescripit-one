import List from "./componets/List/List";
import Header from "./componets/Layout/Header";
import './styles/main.scss';
import Cart from "./componets/Cart/Cart";
function App() {
  return (
    <>
  <Header/>
  <Cart/>
  <main>
  <List/>
  </main>
    </>
  );
}

export default App;
