// Conditional Rendering = Allows you to control what gets rendered in your application based on certain conditions.
// (show, hide, or change components based on state or props)

import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Bob" />
    </>
  );
}

export default App;
