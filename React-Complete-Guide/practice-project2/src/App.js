import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [isCartClicked, setIsCartCliked] = useState(false)

  function showCart (){
    setIsCartCliked(true)
  }

  function hideCart (){
    setIsCartCliked(false)
  }

  return (
    <CartProvider>
      {isCartClicked && <Cart onClose = {hideCart}/>}
      <Header onOpen = {showCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
