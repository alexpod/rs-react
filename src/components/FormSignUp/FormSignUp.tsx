import { useState, FormEvent, useEffect } from "react"
import Input from "../Form/FormInput/FormInput"
import Button from "../Form/FormButton/FormButton"
import formValidation from "../Form/FormValidation"
import FormRadio from "../Form/FormRadio/FormRadio"

const FormSignIn = () => {
  interface Fields {
    [key: string]: string
  }

  const [fields, setFields] = useState<Fields>({
    email: '',
    name: '',
    nickname: '',
    gender: '',
    password: '',
    repassword: ''
  })

  const [validatin, setValidation] = useState({
    email: true,
    name: true,
    nickname: true,
    password: true,
    repassword: true,
  })

  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    console.log('validatinvalidatinvalidatin', validatin)
    const allValues = Object.values(validatin).every(value => value === true);
    //if (allValues) setSubmit(true)
  }, [validatin])

  const handleBlur = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement
    if (formValidation(name, value, fields)) {
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
    setSubmit(false)

    Array.from(e.target).forEach((field) => {
      const { name, value } = field as HTMLInputElement
      
      if (formValidation(name, value, fields)) {
        setValidation((prevValidation) => ({
          ...prevValidation,
          [name]: true
        }))
      } else {
        setValidation((prevValidation) => ({
          ...prevValidation,
          [name]: false
        }))

        console.log('###', validatin)
      }
    })

    

    console.log('allValues', submit)
    
  }

  return (
    <div className="form">
      <h1>Create your account</h1>
      {/* {!submit && ( */}
        
      
      <form action="" onSubmit={handleSubmit}>
        <Input
          label='email'
          type='email'
          value={fields.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your email'
          error='Email is required'
          validation={validatin.email}
        />
        <Input
          label='name'
          type='text'
          value={fields.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your name'
          error='Name is required'
          validation={validatin.name}
        />
        <Input
          label='nickname'
          type='text'
          value={fields.nickname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your nickname'
          error='Nickname is required'
          validation={validatin.nickname}
        />
        <div className="form__radio-group">
          <FormRadio
            label='male'
            name='gender'
            value={fields.gender}
            onChange={handleChange}
          />
          <FormRadio
            label='female'
            name='gender'
            value={fields.gender}
            onChange={handleChange}
          />
        </div>
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
        <Input
          label='repassword'
          type='password'
          value={fields.repassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your password again'
          error='Password is required'
          validation={validatin.repassword}
        />
        <Button
          type='submit'
          text='Sign Up'
          onChange={() => {}}
        />
        <p className="form__text">Already have an account? <a href="#">Sign In</a></p>
      </form>
      {/* )} */}
      { submit && <div className="form__message"><h2>Success</h2>You are signed up</div> }
    </div>
  )
}

export default FormSignIn