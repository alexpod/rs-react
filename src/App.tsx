import { useState } from 'react'
import './App.scss'
import FormSignIn from './components/FormSignIn/FormSignIn'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <FormSignIn />
      
    </>
  )
}

export default App
