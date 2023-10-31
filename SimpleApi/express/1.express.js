// import express from 'express'
const express = require('express')
const app = express()
const PORT = 1234
const ditto = require('../pokemon/ditto.json')

app.disable('x-powered-by') // To remove the 'powered-by' header, security concern

app.get('/', (req, res) => {
  // res.status(200).send('<h1>Express Get Page</h1>')
  // res.json({ message: 'JSON message' })
  res.send('<h1>Express Get Page</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  let body = ''

  // Event data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
})

// the last route checked
app.use((req, res) => {
  res.status(404).send('<h1>Page not found</h1>')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port http://localhost:${PORT}`)
})
