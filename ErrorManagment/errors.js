export class ValidationError extends Error {
  constructor(message) {
    super(message) // Pass to the Base Class constructor
    this.name = 'ValidationError'
  }
}

export class ConnectionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ConnectionError'
    // this.stack = '' // To overwrite the stack message
  }
}
