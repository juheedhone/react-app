import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new york", "nagpur", "pune", "mumbai", "delhi"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
