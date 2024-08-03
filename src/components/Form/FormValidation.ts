interface Fields {
  [key: string]: string
}

const validationField = (fieldName: string, value: string, fields: Fields) => {
  switch (fieldName) {
    case 'email':
      console.log('### EMAIL', value)
      if (!value) return 'Email is required'
      if (!/^\S+@\S+\.\S+$/.test(value)) return 'Email is invalid' 
      return ''
    case 'name':
      if (!value) return 'Name is required'
      return ''
    case 'nickname':
      if (!value) return 'Nickname is required'
      return ''
    case 'gender':
      console.log('### GENDER', value)
      if (!value) return 'Gender is required'
      return ''
    case 'password':
      if (!value) return 'Password is required'
      if (value.length < 6) return 'Password must be at least 6 characters'
      console.log('### PASSWORD', value)
      return ''
    case 'repassword':
      const passwordValue = fields?.password
      if (value !== passwordValue) return 'Password does not match'
      return ''
  }
}

export default validationField