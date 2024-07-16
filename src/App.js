import React, {  } from 'react';
import './App.css';
import { useViewportSize } from './hooks/useViewportSize';

function App() {
  const { height, width } = useViewportSize();
  console.log('===', width, height);

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}

export default App;
