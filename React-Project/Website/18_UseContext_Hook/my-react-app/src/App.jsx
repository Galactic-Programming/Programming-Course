// useContext() is a React hook that allows you to share values between multiple levels of components without having to pass props down manually at every level.

// * Provider component:
// * 1.import {createContext} from "react";
// * 2. export const MyContext = createContext();
// * 3.<MyContext.Provider value={value}> <child /> </MyContext.Provider>

// * Consumer component:
// * 1. import React, { useContext } from "react";
// *    import { MyContext } from "./ComponentA.jsx";
// * 2. const value = useContext(MyContext);

// useContext() is a React hook that allows you to share values between multiple levels of components without having to pass props down manually at every level.

import ComponentA from "./ComponentA.jsx";
import { UserProvider } from "./UserContext.jsx";

function App() {
  return (
    <UserProvider>
      <div style={{ minHeight: '100vh', padding: '20px' }}>
        <h1>useContext Hook Example</h1>
        <ComponentA />
      </div>
    </UserProvider>
  );
}

export default App;