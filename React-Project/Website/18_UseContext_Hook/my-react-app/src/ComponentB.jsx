import React, { useContext } from 'react';
import ComponentC from './ComponentC.jsx';
import { UserContext } from './UserContext.jsx';

function ComponentB() {
    const { user, theme } = useContext(UserContext);

    const componentStyle = {
        backgroundColor: theme === 'light' ? '#e9ecef' : '#444',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '15px',
        margin: '10px 0',
        borderRadius: '6px',
        border: `1px solid ${theme === 'light' ? '#ccc' : '#666'}`
    };

    return (
        <div style={componentStyle}>
            <h3>Component B</h3>
            <p>Hello from Component B!</p>
            <p>User in B: <strong>{user}</strong></p>
            <p>Theme in B: <strong>{theme}</strong></p>
            
            <ComponentC />
        </div>
    );
}

export default ComponentB;