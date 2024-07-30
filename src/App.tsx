import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import FormSignIn from './components/FormSignIn/FormSignIn'
import FormSignUp from './components/FormSignUp/FormSignUp'

function App() {
  const [state, setState] = useState('signin')

  const handleMenuClick = (item: string) => {
    setState(item)
    console.log('###', state, item)
  }

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      {state === 'signin' && <FormSignIn /> }
      {state === 'signup' && <FormSignUp /> }
    </>
  )
}

export default App
