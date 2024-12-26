import Button from "./components/button/button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("clicked")}>
        my button
      </Button>
    </div>
  );
}

export default App;
