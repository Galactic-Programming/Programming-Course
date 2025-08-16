import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <p className="counter-display">Count: {count}</p>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <p className="counter-instructions">Use the buttons to change the count value.</p>
            <p className="counter-instructions">Clicking the buttons will update the state and re-render the component.</p>
            <p className="counter-instructions">Current count value is: {count}</p>
        </div>
    );
}

export default Counter;