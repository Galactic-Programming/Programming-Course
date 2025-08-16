import React, { useState, createContext } from 'react';

// Tạo Context
export const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("BroCode");
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    const loginUser = (newUser) => {
        setUser(newUser);
    };

    const logoutUser = () => {
        setUser("Guest");
    };

    // Giá trị được chia sẻ cho tất cả components
    const contextValue = {
        user,
        theme,
        toggleTheme,
        loginUser,
        logoutUser
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};