// To run this file: npm run dev:5

const express = require ('express') // require -> commonJS

const app = express()
const movies = require('../movies/movies.json')
app.disable('x-powered-by') // disable the header X-Powered-By: Express

app.get('/', (req, res) => {
  res.json({ message: 'Hello Express' })
})

// Movies resources  /movies
app.get('/movies', (req, res) => {
  res.json(movies)
})

app.get('/movies/:id', (req, res) => { // path-to-regexp

})

const PORT = 1234

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${1234}`)
})
