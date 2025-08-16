import PropTypes from 'prop-types';

function List(props) {
  const itemList = props.items;
  const category = props.category;

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Aphabetical order
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse alphabetical order
  // fruits.sort((a, b) => a.calories - b.calories); // Ascending order by calories
  // fruits.sort((a, b) => b.calories - a.calories); // Descending order by calories

  // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} - <b>{item.calories}</b> calories
    </li>
  ));

  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}
List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
  category: PropTypes.string
};
List.defaultProps = {
  items: [],
  category: "Category"
};

export default List;
