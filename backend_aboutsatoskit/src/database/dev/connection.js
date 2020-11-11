const { Client } = require('pg')
const dotenv = require('dotenv')
const pool = require('./pool')

const connectionString = process.env.DATABASE_URL

const client = new Client({connectionString, })

client.connect()

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
})

module.exports = client