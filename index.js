const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<div><h1>Hello World!</h1><p>I shall be published to DockerHub via Github Actions</p></div>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})