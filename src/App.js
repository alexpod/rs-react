import React, {  } from 'react';
import './App.css';
import { useFatch } from './hooks/useFatch';

function App() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFatch('https://jsonplaceholder.typicode.com/posts') || {};

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>Reload</button>
        { isLoading && 'Loading...' }
        { error && 'Error' }
        <div className='list'>
        { data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
        </div>

      </header>

        
    </div>
  );
}

export default App;
