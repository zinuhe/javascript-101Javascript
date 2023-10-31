const express = require('express')
const app = express()
const PORT = 1234

app.get('/', (req, res) => {
  // res.status(200).send('<h1>Express Get Page</h1>')
  // res.json({ message: 'JSON message' })
  res.send('<h1>Express Get Page</h1>')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port http://localhost:${PORT}`)
})
