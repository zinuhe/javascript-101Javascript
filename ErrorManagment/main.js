const validateUser = ({ name, age, email } = {}) => {
  if (!name) throw new ValidationError('Name is required')
  if (!age) throw new ValidationError('Age is required')
  if (!email) throw new ValidationError('Email is required')
}

class ValidationError extends Error {
  constructor(message) {
    super(message) // Pass to the Base Class constructor
    this.name = 'ValidationError'
  }
}

const name = 'Jim'
const age = 45
const email = null

try {
  validateUser(name, age, email)
} catch (e) {
  // console.error(e instanceof ValidationError)
  console.error(e.name)
  if (e.name === 'ValidationError') {
    // do something
    console.log('Error')
  }
}
