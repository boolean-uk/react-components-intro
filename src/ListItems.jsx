// eslint-disable-next-line react/prop-types
function ListItems({ items }) {
  // eslint-disable-next-line react/prop-types
  console.log(items);
  // eslint-disable-next-line react/prop-types

  // eslint-disable-next-line react/prop-types
  // items.map((item) => <h1>{item.name}</h1>);

  // eslint-disable-next-line react/prop-types
  const listitems = items.map((item, index) => <li key={index}>{item}</li>);

  return <ul>{listitems}</ul>;
}

export default ListItems;
