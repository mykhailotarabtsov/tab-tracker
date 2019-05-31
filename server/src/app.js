/* eslint-disable no-console */
console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res, next) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

app.get('/', (req, res, next) => {
  res.send('<h1 style="text-align: center;">Hi! You are on my page!</h1>')
})

app.listen(process.env.PORT || 8081)