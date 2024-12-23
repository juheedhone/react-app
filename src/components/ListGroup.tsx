import { useState } from "react";

function ListGroup() {
  let items = ["new york", "nagpur", "pune", "mumbai"];

  // hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  //  arr[0] //variable (selectedIndex)
  //  arr[1] //updater function

  // event handler

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>no item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
