import { useState, FormEvent } from "react"
import Input from "../Form/FormInput/FormInput"
import Button from "../Form/FormButton/FormButton"
import formValidation from "../Form/FormValidation"

const FormSignIn = () => {
  interface Fields {
    [key: string]: string
  }

  const [fields, setFields] = useState<Fields>({
    email: '',
    password: ''
  })

  const [validatin, setValidation] = useState({
    email: true,
    password: true
  })

  const [submit, setSubmit] = useState(false)

  const handleBlur = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement
    if (formValidation(name, value)) {
      setValidation((prevValidation) => ({
        ...prevValidation,
        [name]: true
      }))
    } else {
      setValidation((prevValidation) => ({
        ...prevValidation,
        [name]: false
      }))
    }
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement // name = e.target.name

    setFields((prevFields: Fields) => ({
      ...prevFields,
      [name.toLocaleLowerCase()]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const { name, value } = e.target as HTMLInputElement
    // console.log('name, value', e.target[0])

    Array.from(e.target).forEach((field) => {
      const { name, value } = field as HTMLInputElement
      
      if (formValidation(name, value)) {
        setValidation((prevValidation) => ({
          ...prevValidation,
          [name]: true
        }))
      } else {
        setValidation((prevValidation) => ({
          ...prevValidation,
          [name]: false
        }))
      }
    })

    const allValuesTrue = Object.values(validatin).every(value => value === true);
    if (allValuesTrue) setSubmit(true)
  }

  return (
    <div className="form">
      <h1>Sign into your account</h1>
      { !submit && (
        
      
      <form action="" onSubmit={handleSubmit}>
        <Input
          label='email'
          type='email'
          value={fields.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your email'
          error='Email is required'
          className="test"
          validation={validatin.email}
        />
        <Input
          label='password'
          type='password'
          value={fields.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your password'
          error='Password is required'
          validation={validatin.password}
        />
        <Button
          type='submit'
          text='Sign In'
          onChange={() => {}}
        />
        <p className="form__text">Don't have an account? <a href="#">Sign Up</a></p>
      </form>
      ) }

      { submit && <div className="form__message"><h2>Success</h2>You are signed in</div> }
    </div>
  )
}

export default FormSignIn