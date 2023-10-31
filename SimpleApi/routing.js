const http = require('node:http')

// get data from a file
const dittoJSON = require('./pokemon/ditto.json')
const { type } = require('node:os')

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
          res.statusCode = 404
          res.setHeader('Content-type', 'text/html; charset=utf-8')
          return res.end('<h1>NOT FOUND</h1>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
          // Listen data event
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // Call a DB or a service
            res.writeHead(201, { 'Content-type': 'application/json; charset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-type', 'text/html; charset=utf-8')
          return res.end('<h1>NOT FOUND</h1>')
      }
      break
    default:
      res.statusCode = 404
      res.setHeader('Content-type', 'text/html; charset=utf-8')
      return res.end('<h1>NOT FOUND</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('server listening on port http://localhost/1234')
})
