import List from './List.jsx';

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 62 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Pineapple", calories: 82 },
    { id: 5, name: "Watermelon", calories: 30 },
  ];
  const vegetables = [
    { id: 6, name: "Carrot", calories: 41 },
    { id: 7, name: "Broccoli", calories: 55 },
    { id: 8, name: "Spinach", calories: 23 },
    { id: 9, name: "Potato", calories: 77 },
    { id: 10, name: "Tomato", calories: 18 },
  ];
  return (
    <div>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </div>
  );
}

export default App
