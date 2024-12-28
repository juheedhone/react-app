import { produce } from "immer";
import { useState } from "react";
// import Button from "./components/button/button";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));

    //immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.fixed = true;
        }
      })
    );
  };

  return (
    <>
      <button onClick={handleClick}>Fix</button>
      <div>
        {bugs.map((bug) => (
          <p key={bug.id}>{`${bug.title} ${bug.fixed ? 'done' : 'new'} `}</p>
        ))}
      </div>
    </>
  );
}

export default App;
