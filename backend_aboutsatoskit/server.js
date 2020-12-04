'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// const routes = require('./routes.js')

const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const cors = require('cors')
const corsOption = {
    origin: 'http://localhost:5000'
}

const queries = require('./src/database/dev/demo-queries')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors(corsOption))

// mount routes?
// const routes = require('./src/routes')
// routes(app)
const recipeRoutes = require('./src/routes/recipeRoutes')
app.use('/api/recipe', recipeRoutes)


app.get('/api/v1/get-all', queries.getAll)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`${process.env.DATABASE_URL}`)
})

app.get('/', (req, res) => {
    res.json({ express: 'Say something' })
})