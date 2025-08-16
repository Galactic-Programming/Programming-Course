// useEffect() is React hook that tells React "Do some code when" (pick one or more dependencies change):
//             This component re-renders
//             This component mounts
//             The state of a value

// useEffect(function, [dependencies]);

// 1. useEffect(() => {})          // Runs after every re-render
// 2. useEffect(() => {}, [])      // Runs on mount only
// 3. useEffect(() => {}, [value]) // Runs on mount and when value changes

// Uses:
// #1. Event listeners
// #2. Fetching data from an API
// #3. DOM manipulation
// #4. Setting up subscriptions (real-time data updates)
// #5. Cleanup (e.g., removing event listeners, cancelling subscriptions)...

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count, color]);

  function addCount() {
    setCount((count) => count + 1);
  }

  function subtractCount() {
    setCount((count) => count - 1);
  }

  function changeColor() {
    setColor((color) => (color === "green" ? "blue" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent;
