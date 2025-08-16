// React hook = specical function that allows functional components to use React features without writing class components (e.g., state, lifecycle methods)
//              (useState, useEffect, useContext, useReduce, useCallback, and more etc.)

// useState() = A React hook that aloows the creation of a stateful variable and a setter function to update its value in the Virtual DOM.
//              [name, setName] = useState(initialValue)

import Counter from "./Counter.jsx";
import MyComponent from "./MyComponent.jsx";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
