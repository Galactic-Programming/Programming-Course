// Props = read-only properties that are shared between components.
//         A parent component can send data to c child components.
//         <component key="value" />

import Student from './Student.jsx';
function App() {
  return (
    <>
      <Student name="SpongeBob" age={20} isStudent={true} />
      <Student name="Patrick" age={21} isStudent={false} />
      <Student name="Squidward" age={40} isStudent={false} />
      <Student name="Sandy" age={30} isStudent={true} />
      <Student />
    </>
  );
}

export default App
