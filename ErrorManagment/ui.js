import { ValidationError, ConnectionError } from './errors.js'
import { validateUser } from './validations.js'

const name = 'Jim'
const age = 45
const email = null

try {
  validateUser({ name, age, email })
} catch (e) {
  if (e instanceof ConnectionError) {
    // retry after a few a seconds
    setTimeout(() => {
      validateUser({ name, age, email })
    }, 1000)
  }

  if (e instanceof ValidationError) {
    // do something
    console.log('Show modal Validation')

    // Message returned by the validateUser() function,but this error shouln't reache the user interface
    console.log(e.message)
  }
}
