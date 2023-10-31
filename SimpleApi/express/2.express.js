// import express from 'express'
const express = require('express')
const app = express()
const PORT = 1234
const ditto = require('../pokemon/ditto.json')

app.disable('x-powered-by') // To remove the 'powered-by' header, security concern

// Simple Middleware
// app.use('/xxx', (req, res, next)
app.use((req, res, next) => {
  console.log('Middleware')
  next()
})

// app.use(express.json())  // Native in Express, makes the same as all the code below
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // Process request with a POST and content-type: application/json
  let body = ''

  // Event data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // Mutate the request and include the info in req.body
    req.body = data
    next()
  })
})

app.get('/', (req, res) => {
  // res.status(200).send('<h1>Express Get Page</h1>')
  // res.json({ message: 'JSON message' })
  res.send('<h1>Express Get Page</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// the last route checked
app.use((req, res) => {
  res.status(404).send('<h1>Page not found</h1>')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port http://localhost:${PORT}`)
})
