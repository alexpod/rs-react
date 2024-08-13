import React from 'react';
import './App.css';
import { useToggle } from './hooks/useToggleExt';

function App() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
  // const [value, toggle] = useToggle();
  return (
    <>
    <h1>{value}</h1>
    <button onClick={() => toggle()}>Toggle</button>
    <button onClick={() => toggle('cyan')}>
      Change to CYAN
    </button>
    <button onClick={() => toggle('blue')}>
      Change to BLUE
    </button>
    </>
  );
}

export default App;

