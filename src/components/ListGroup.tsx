function ListGroup() {
  let items = ["new york", "nagpur", "pune", "mumbai"];
  items = [];
  // solution3

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>no item fount</p>
  //     </>
  //   );

  // solution 4
  // let getMessage = () =>  {
  //   items.length === 0 ? <p>no item found</p> : null;
  // }

  return (
    <>
      <h1>List</h1>

      {/* solution 1 */}
      {/* {items.length === 0 ? <p>no item found</p> : null} */}

      {/* solution2 */}
      {items.length === 0 && <p>no item found</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
