import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product1", quantity: 1 },
      { id: 2, title: "product2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((items) =>
        items.id === 1 ? { ...items, quantity: 2 } : items
      ),
    });
  };

  return (
    <div>
      {cart.items[0].quantity}
      <button onClick={handleClick}>clickMe</button>
    </div>
  );
}

export default App;
