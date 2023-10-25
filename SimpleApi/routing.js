const http = require('node:http')

// get data from a file
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  console.log('7')
  const { method, url } = req
  console.log(`method:${method} - url:${url}`)
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          console.log('13')
          res.setHeader('Content-type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          return res.end('NOT FOUND')
      }
    case 'POST':
      switch (url) {
        case '/pokemon':
          // const body = ''
          break
        default:
          res.statusCode = 404
          return res.end
      }
      break
    default:
      res.statusCode = 404
      return res.end('NOT FOUND')
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('server listening on port http://localhost/1234')
})
