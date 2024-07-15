import * as React from 'react'
import './App.css'
import { UseLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [token, { setItem, removeItem }] = UseLocalStorage('token');

  return (
    <>
      <p>
        Your token: { token }
      </p>
      <div className='actions'>
        <button onClick={() => setItem('new-token')}>
          Set token
        </button>
        <button onClick={() => removeItem()}>
          Remove token
        </button>
      </div>

    </>
  )
}

export default App
