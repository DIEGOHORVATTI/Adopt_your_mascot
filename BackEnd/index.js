const express = require('express')
const cors = require('cors')

const app = express()

//config json response
app.use(express.json())

// solve cors
app.use(cors ({ credentials: true, origin: 'http://localhost/5000' }))

// public folder for imagens
app.use(express.static('public'))

//routes
app.listen(5000)