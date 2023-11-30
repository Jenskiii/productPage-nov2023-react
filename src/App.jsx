import { useEffect, useReducer, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home/Home";
import { ShoeContext } from "./context/shoeContext";
import { reducer , ACTIONS } from "./utils/reducer";

// local storage name
const LOCAL_STORAGE_KEY = "CART-ITEMS";

// start app
function App() {
  // counter of product amount
  const [count, setCount] = useState(1);
  // holds value of cart items
  const [cartAmount, setCartAmount] = useState(0);
  // sets cart items and saves it to local storage
  const [cartItems, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value === null) return initialValue;
    return JSON.parse(value);
  });

  //  updates localstorage when value updates
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // reducer functions
  function addCartItem(amount, name, price, image) {
    dispatch({type : ACTIONS.ADD, payload :{amount, name, price, image}})
  }
  function deleteCartItem(itemId) {
    dispatch({type : ACTIONS.DELETE, payload :{id:itemId}})
  }
  function clearCart() {
    dispatch({type : ACTIONS.CLEAR})
  }

  return (
    <>
      <ShoeContext.Provider
        value={{
          cartItems,
          addCartItem,
          deleteCartItem,
          clearCart,
          count,
          setCount,
          cartAmount,
          setCartAmount,
        }}
      >
        <NavBar />
        <Home />
      </ShoeContext.Provider>
    </>
  );
}

export default App;
