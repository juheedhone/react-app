import { useState } from "react";
// import Button from "./components/button/button";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <>
      <button onClick={handleClick}>Fix</button>
      <div>
        {bugs.map((bug) => (
          <div key={bug.id}>
            <p>{`name: ${bug.title}`}</p>
            <p>{`status: ${bug.fixed}`}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
