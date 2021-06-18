const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(8080, () => { 
app.listen(process.env.PORT, () => { // heroku
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})