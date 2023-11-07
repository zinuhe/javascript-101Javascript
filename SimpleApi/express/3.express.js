// To run this file: npm run dev:5
const express = require('express') // require -> commonJS
const crypto = require('node:crypto')
const movies = require('../movies/movies.json')

const app = express()
app.disable('x-powered-by') // disable the header X-Powered-By: Express
app.use(express.json) // Middleware from Express

app.get('/', (req, res) => {
  res.json({ message: 'Hello Express' })
})

// Movies resources  /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      // movie => movie.genre.includes(genre)
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }

  res.json(movies)
})

app.get('/movies/:id', (req, res) => { // path-to-regexp
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not found.' })
})

app.post('/movies', (req, res) => {
  const {
    title,
    genre,
    year,
    director,
    duration,
    rate,
    poster
  } = req.body

  const newMovie = {
    id: crypto.randomUUID(), // creates an UUID v4
    title,
    genre,
    year,
    director,
    duration,
    rate: rate ?? 0,
    poster
  }
  movies.push()
  res.status(201).json(newMovie) // return the same resource created
})

const PORT = 1234

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${1234}`)
})
