const express = require('express')
const app = express()
const port = 3000
app.use(express.static('codebase'))

app.get('/', (req, res) => {
  res.sendFile('Index.html')
})

app.listen(3000);