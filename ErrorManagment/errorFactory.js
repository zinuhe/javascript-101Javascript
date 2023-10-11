const createErrorFactory = function(name) {
  return class BusinessError extends Error {
    constructor(message) {
      super(message)
      this.name = name
    }
  }
}

export const createConnectionError = createErrorFactory('ConnectionError')
export const createValidationError = createErrorFactory('ValidationError')
