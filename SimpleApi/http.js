const http = require('node:http') // HTTP protocol - https://nodejs.org/api/http.html#http
const port = 1234

// const server = http.createServer((req, res) => {
//   console.log('Request received:', req.url)
//   res.end('Response ended')
// })

const processRequest = (req, res) => {
  console.log('Request received:', req.url)
  res.end('Response ended')
}
const server = http.createServer(processRequest)

server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
