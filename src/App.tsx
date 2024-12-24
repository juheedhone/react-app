import ListGroup from "./components/ListGroup";
function App() {
  let item = ["new york", "nagpur", "pune", "mumbai"];
  const HandleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={item}
        heading="cities"
        onSelectItem={HandleSelectItem}
      />
    </div>
  );
}

export default App;
