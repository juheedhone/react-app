import { MouseEvent } from "react";

function ListGroup() {
  let items = ["new york", "nagpur", "pune", "mumbai"];


  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>no item found</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
