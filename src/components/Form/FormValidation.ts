interface Fields {
  [key: string]: string
}

const validationField = (fieldName: string, value: string, fields: Fields) => {
  switch (fieldName) {
    case 'email':
      return /^\S+@\S+\.\S+$/.test(value)
    case 'name':
      return value.length >= 2
    case 'nickname':
      return value.length >= 2
    case 'gender':
      console.log('gender', value)
      return value
    case 'password':
      return value.length >= 8
    case 'repassword':
      const passwordValue = fields?.password
      return value.length >= 2 && value === passwordValue
    default:
      console.log('Other', fieldName, value)
      return true
  }
}

export default validationField