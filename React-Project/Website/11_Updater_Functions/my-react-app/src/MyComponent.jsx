/* eslint-disable no-unused-vars */
// Updater Functions is a function passed as an argument to  setState() usually used to update the state based on the previous state.
// Example: setYear(year + 1);
// Allow for safe updates based on the previous state.
// Use with multiple state updates and asynchronous functions.
//


import React, { useState } from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Guest");

    // Cách thông thường (có thể gây vấn đề với multiple updates)
    const incrementNormal = () => {
        setCount(count + 1);
        setCount(count + 1); // Chỉ tăng 1 lần vì count vẫn là giá trị cũ
        setCount(count + 1);
    };

    // Cách sử dụng Updater Function (an toàn với multiple updates)
    const incrementWithUpdater = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1); // Tăng 3 lần vì sử dụng prevCount
        setCount(prevCount => prevCount + 1);
    };

    // Ví dụ với multiple state updates
    const handleReset = () => {
        setCount(prevCount => 0);
        setName(prevName => "Guest");
    };

    // Ví dụ với asynchronous operation
    const incrementAsync = () => {
        setTimeout(() => {
            setCount(prevCount => prevCount + 1); // An toàn với async
        }, 1000);
    };

    // Ví dụ phức tạp hơn
    const handleComplexUpdate = () => {
        setCount(prevCount => {
            const newCount = prevCount + 5;
            console.log(`Updating from ${prevCount} to ${newCount}`);
            return newCount;
        });
    };
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Updater Functions Example</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <h3>Current Count: {count}</h3>
                <h3>Name: {name}</h3>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <button 
                    onClick={incrementNormal}
                    style={{ margin: '5px', padding: '10px', backgroundColor: '#ff6b6b', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                    Increment Normal (Problem)
                </button>
                <span style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}>
                    Tries to add 3 but only adds 1
                </span>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <button 
                    onClick={incrementWithUpdater}
                    style={{ margin: '5px', padding: '10px', backgroundColor: '#4ecdc4', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                    Increment with Updater (Safe)
                </button>
                <span style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}>
                    Correctly adds 3
                </span>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <button 
                    onClick={incrementAsync}
                    style={{ margin: '5px', padding: '10px', backgroundColor: '#45b7d1', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                    Increment Async (+1)
                </button>
                <span style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}>
                    Adds 1 after 1 second
                </span>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <button 
                    onClick={handleComplexUpdate}
                    style={{ margin: '5px', padding: '10px', backgroundColor: '#f7b731', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                    Complex Update (+5)
                </button>
                <span style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}>
                    Adds 5 with logging
                </span>
            </div>

            <div>
                <button 
                    onClick={handleReset}
                    style={{ margin: '5px', padding: '10px', backgroundColor: '#a55eea', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                    Reset All
                </button>
            </div>

            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
                <h4>Key Points:</h4>
                <ul>
                    <li><strong>Normal way:</strong> <code>setCount(count + 1)</code> - Uses current state value</li>
                    <li><strong>Updater way:</strong> <code>setCount(prevCount =&gt; prevCount + 1)</code> - Uses previous state</li>
                    <li><strong>Benefits:</strong> Safe for multiple updates, async operations, and complex logic</li>
                </ul>
            </div>
        </div>
    );
}

export default MyComponent;