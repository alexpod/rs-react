interface Fields {
  [key: string]: string
}

const validationField = (fieldName: string, value: string, fields: Fields) => {
  switch (fieldName) {
    case 'email':
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
      if (!fields.gender) return 'Gender is required'
      return ''
    case 'password':
      if (!value) return 'Password is required'
      if (value.length < 6) return 'Password must be at least 6 characters'
      return ''
    case 'repassword':
      const passwordValue = fields?.password
      if (value !== passwordValue) return 'Password does not match'
      return ''
  }
}

export default validationField