import { useState } from "react";
import style from "./ListGroup.module.css";

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  //(item : string)=> void
  onSelectItem: (items: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  //  arr[0] //variable (selectedIndex)
  //  arr[1] //updater function

  // event handler

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>no item found</p>}

      <ul className={[style.listGroup, style.container].join(' ')}>
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
              onSelectItem(item);
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
