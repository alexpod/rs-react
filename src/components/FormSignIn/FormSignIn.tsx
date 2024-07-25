import { useState, FormEvent } from "react"
import Input from "../Form/FormInput/FormInput"
import Button from "../Form/FormButton/FormButton"

const FormSignIn = () => {
  interface Fields {
    [key: string]: string
  }

  const [fields, setFields] = useState<Fields>({
    email: '',
    password: ''
  })


  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    //e.preventDefault()
    const [name, value] = e.target.value


    setFields((prevFields: Fields) => ({
      ...prevFields,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Handle Submit',e)
  }

  return (
    <div className="form">
      <h1>Sign into your account</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label='Email'
          type='email'
          value=""
          onChange={handleChange}
          placeholder= 'Enter your email'
          error='Email is required'
          className="test"
        />
        <Input
          label='Password'
          type='password'
          value=""
          onChange={handleChange}
          placeholder= 'Enter your password'
          error='Password is required'
        />
        <Button
          type='submit'
          text='Sign In'
          onChange={() => {}}
        />
        <p className="form__text">Don't have an account? <a href="#">Sign Up</a></p>
      </form>
    </div>
  )
}

export default FormSignIn