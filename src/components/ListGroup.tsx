import { useState } from "react"; // Hook

interface Props {
  items: string[];
  heading: string;
}

//instead of Fragment we can use <>
function ListGroup({ items, heading }: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  //   const message = items.length === 0 ? <p>No item found</p> : null;
  const message = items.length === 0 && <p>No item found</p>; // && is exactly like 'and' in Lua!

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
