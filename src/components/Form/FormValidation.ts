const validationField = (fieldName: string, value: string) => {
  switch (fieldName) {
    case 'email':
      console.log('email', value)
      return /^\S+@\S+\.\S+$/.test(value)
    case 'password':
      console.log('password', value)
      return value.length >= 8
    default:
      console.log('Other', fieldName, value)
      return true
  }
}

export default validationField