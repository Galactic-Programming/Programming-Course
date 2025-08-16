import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext.jsx';

function ComponentC() {
    const { user, theme, loginUser, logoutUser } = useContext(UserContext);
    const [inputUser, setInputUser] = useState("");

    const componentStyle = {
        backgroundColor: theme === 'light' ? '#fff' : '#555',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '15px',
        margin: '10px 0',
        borderRadius: '6px',
        border: `1px solid ${theme === 'light' ? '#bbb' : '#777'}`
    };

    const handleLogin = () => {
        if (inputUser.trim()) {
            loginUser(inputUser);
            setInputUser("");
        }
    };

    return (
        <div style={componentStyle}>
            <h4>Component C (Deep nested)</h4>
            <p>Current user in deep component: <strong>{user}</strong></p>
            
            <div style={{ marginTop: '15px' }}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={inputUser}
                    onChange={(e) => setInputUser(e.target.value)}
                    style={{
                        padding: '8px',
                        marginRight: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />
                
                <button 
                    onClick={handleLogin}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '5px'
                    }}
                >
                    Login
                </button>
                
                <button 
                    onClick={logoutUser}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Logout
                </button>
            </div>

            <div style={{ 
                marginTop: '15px', 
                padding: '10px', 
                backgroundColor: theme === 'light' ? '#f8f9fa' : '#666',
                borderRadius: '4px'
            }}>
                <h5>Key Benefits of useContext:</h5>
                <ul>
                    <li>✅ No prop drilling needed</li>
                    <li>✅ Data accessible at any level</li>
                    <li>✅ Cleaner component tree</li>
                    <li>✅ Centralized state management</li>
                </ul>
            </div>
        </div>
    );
}

export default ComponentC;