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
    email: '',
    name: '',
    nickname: '',
    gender: '',
    password: '',
    repassword: '',
  })

  const [submit, setSubmit] = useState(false)

  const genders = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    }
  ]

  let allValuesTrue = false
  let allFieldsTrue = false
  // const allValues = {}

  useEffect(() => {
    // console.log('useEffect::::', fields)
    allValuesTrue = Object.values(validatin).every(value => value === '');
    allFieldsTrue = Object.values(fields).every(value => value !== '');
    // console.log('allValuesTrue', allValuesTrue, allFieldsTrue)
      
    
  }, [validatin, fields])

  const handleBlur = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement
    setValidation((prevValidation) => ({
      ...prevValidation,
      [name]: formValidation(name, value, fields)
    }))
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement // name = e.target.name

    setFields((prevFields: Fields) => ({
      ...prevFields,
      [name.toLocaleLowerCase()]: value
    }))

    setValidation((prevValidation) => ({
      ...prevValidation,
      [name]: formValidation(name, value, fields)
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    Array.from(e.target).forEach((field) => {
      const { name, value } = field as HTMLInputElement
      if (formValidation(name, value, fields)) {
        setValidation((prevValidation) => ({
          ...prevValidation,
          [name]: formValidation(name, value, fields)
        }))
      }
      
    })

    allValuesTrue = Object.values(validatin).every(value => value === '');
    allFieldsTrue = Object.values(fields).every(value => value !== '');
    if (allValuesTrue && allFieldsTrue) {
      console.log('setSubmit allValuesTrue', allValuesTrue, allFieldsTrue)
      setSubmit(true);
    }

    console.log('submit', validatin, fields)
  }

  return (
    <div className="form">
      <h1>Create your account</h1>
      {!submit && (
        
      
      <form action="" onSubmit={handleSubmit} noValidate>
        <Input
          label='email'
          type='email'
          value={fields.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your email'
          error={validatin.email}
        />
        <Input
          label='name'
          type='text'
          value={fields.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your name'
          error={validatin.name}
        />
        <Input
          label='nickname'
          type='text'
          value={fields.nickname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your nickname'
          error={validatin.nickname}
        />
        <FormRadio
          name='gender'
          value={fields.gender}
          props={genders}
          onChange={handleChange}
          onBlur={handleBlur}
          error={validatin.gender}
        />
        <Input
          label='password'
          type='password'
          value={fields.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your password'
          error={validatin.password}
        />
        <Input
          label='repassword'
          type='password'
          value={fields.repassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= 'Enter your password again'
          error={validatin.repassword}
        />
        <Button
          type='submit'
          text='Sign Up'
          onChange={() => {}}
        />
        <p className="form__text">Already have an account? <a href="#">Sign In</a></p>
      </form>
      )}
      { submit && <div className="form__message"><h2>Success</h2>You are signed up</div> }
    </div>
  )
}

export default FormSignIn