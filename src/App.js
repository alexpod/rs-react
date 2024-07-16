import React, {  } from 'react';
import './App.css';
import { useToggleExt } from './hooks/useToggleExt';

function App() {
  cconst [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}

export default App;

