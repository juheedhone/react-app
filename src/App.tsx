import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState(["product1", "product2"]);

  const clearCart = () => setCartItems([]);
  const addProduct = () => setCartItems(["product3"]);

  return (
    <>
      <Navbar cartItemCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClearCart={clearCart}
        onAddProduct={addProduct}
      />
    </>
  );
}

export default App;
