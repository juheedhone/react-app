import { useState } from "react";
// import Button from "./components/button/button";

function App() {
  const [drink, setDrink] = useState({
    title: "americano",
    price: 5,
  });

  // const handleClick = () => {
  //   const newDrink = {
  //    ...drink,
  //     price: 6,
  //   };
  //   setDrink(newDrink);
  // };

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>ClickMe</button>
    </div>
  );
}

export default App;
