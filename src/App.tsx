import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "spicy pepperoni",
    toppings: ["mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings,  "cheese"] });
  };

  return (
    <div>
      {pizza.toppings.join()}
      <button onClick={handleClick}>clickMe</button>
    </div>
  );
}

export default App;
