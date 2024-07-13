import React, {  } from 'react';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [token, { setItem, removeItem }] = useLocalStorage('token');

  return (
    <div>
      <p>
        Your token: { token }
      </p>
      <div>
        <button onClick={() => setItem('new-token')}>
          Set token
        </button>
        <button onClick={() => removeItem()}>
          Remove token
        </button>
      </div>
    </div>
  );
}

export default App;
