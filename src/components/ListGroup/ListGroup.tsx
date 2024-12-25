import { useState } from "react";
import styled from "styled-components";
import "./ListGroup.css";

const List = styled.ul`
  list-style: none;

  `;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

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

      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
