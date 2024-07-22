import { FormEvent } from "react"
import Input from "../Form/FormInput/FormInput"

const FormSignIn = () => {
  const email = {
    label: 'Email',
    type: 'email',
    value: '',
    onChange: () => {},
    disabled: false,
    placeholder: 'Enter your email'
  }

  const handleNameChange = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
  }

  return (
    <div className="form">
      <h1>Sign into your account</h1>
      <form action="">
        <Input
          label='Email'
          type='email'
          value=''
          onChange={handleNameChange}
          placeholder= 'Enter your email'
          error='Email is required'
        />
        <Input
          label='Password'
          type='password'
          value=''
          onChange={handleNameChange}
          placeholder= 'Enter your password'
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default FormSignIn