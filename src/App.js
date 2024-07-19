import React from 'react';
import './App.css';
import { useToggle } from './hooks/useToggleExt';

function App() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
  // const [value, toggle] = useToggle();

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}

export default App;

