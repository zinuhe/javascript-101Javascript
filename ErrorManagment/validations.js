import { ValidationError, ConnectionError } from './errors.js'
// import { validateUser } from './validations'

export const validateUser = ({ name, age, email } = {}) => {
  if (!name) throw new ValidationError('Name is required')
  if (!age) throw new ValidationError('Age is required')
  if (!email) throw new ValidationError('Email is required')
}

try {
  // validateUser(name, age, email)
} catch (e) {
  // console.error(e instanceof ValidationError)
  throw new ConnectionError('Database is not available')
}
