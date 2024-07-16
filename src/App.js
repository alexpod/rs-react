import React from 'react';
import './App.css';
import { useHover } from './hooks/useHover';

function App() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}

export default App;
