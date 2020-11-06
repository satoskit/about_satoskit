'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
// const cors = require('cors')

const queries = require('./src/database/dev/demo-queries')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// app.use(cors)

app.get('/api/v1/get-all', queries.getAll)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`${process.env.DATABASE_URL}`)
})

app.get('/', (req, res) => {
    res.json({ express: 'Say something' })
})