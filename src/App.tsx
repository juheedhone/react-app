import Button from "./components/button";

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("register")}>clickHere</Button>
    </div>
  );
}

export default App;
