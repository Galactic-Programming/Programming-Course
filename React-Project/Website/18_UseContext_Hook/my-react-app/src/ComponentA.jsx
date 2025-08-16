import React, { useContext } from 'react';
import ComponentB from './ComponentB.jsx';
import { UserContext } from './UserContext.jsx';

function ComponentA() {
    const { user, theme, toggleTheme } = useContext(UserContext);

    const componentStyle = {
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '20px',
        margin: '10px',
        borderRadius: '8px',
        border: `2px solid ${theme === 'light' ? '#ddd' : '#555'}`
    };

    return (
        <div style={componentStyle}>
            <h2>Component A</h2>
            <p>Current User: <strong>{user}</strong></p>
            <p>Current Theme: <strong>{theme}</strong></p>
            
            <button 
                onClick={toggleTheme}
                style={{
                    padding: '10px 15px',
                    backgroundColor: theme === 'light' ? '#007bff' : '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginRight: '10px'
                }}
            >
                Toggle Theme
            </button>

            <ComponentB />
        </div>
    );
}

export default ComponentA;
