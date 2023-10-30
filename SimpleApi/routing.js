const http = require('node:http')

// get data from a file
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  console.log(`method:${method} - url:${url}`)
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.setHeader('Content-type', 'text/html; charset=utf-8')
          res.statusCode = 404
          return res.end('<h1>NOT FOUND</h1>')
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
