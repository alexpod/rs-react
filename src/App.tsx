import { useState } from 'react'
import './assets/scss/index.scss'
import './assets/scss/layout.scss'
import Header from './components/Header/Header'
import FormSignIn from './components/FormSignIn/FormSignIn'
import FormSignUp from './components/FormSignUp/FormSignUp'

function App() {
  const [state, setState] = useState('signin')

  const handleMenuClick = (item: string) => {
    setState(item)
  }

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      {state === 'signin' && <FormSignIn onMenuClick={handleMenuClick} /> }
      {state === 'signup' && <FormSignUp onMenuClick={handleMenuClick} /> }
    </>
  )
}

export default App
