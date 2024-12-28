import { useState } from "react";
// import Button from "./components/button/button";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful", "hot"]);

  // const handleClick = () => {
  //   // Add
  //   setTags([...tags, "exciting"]);

  //   // Remove
  //   setTags(tags.filter((tag) => tag !== "happy"));

  //   // Update
  //   setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  // };

  const handleAddTag = () => {
    setTags([...tags, "exciting"]);
  };
  const handleRemoveTag = () => {
    setTags(tags.filter((tag) => tag !== "hot"));
  };
  const handleUpdateTag = () => {
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <>
      <button onClick={handleAddTag}>Add</button>
      <button onClick={handleRemoveTag}>Remove</button>
      <button onClick={handleUpdateTag}>Update</button>
      <div>{tags.map((tag) => tag + ",")}</div>
    </>
  );
}

export default App;
