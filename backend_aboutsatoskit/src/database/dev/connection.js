// const { Client } = require('pg')
// const dotenv = require('dotenv')
const pool = require('./pool')

// const connectionString = process.env.DATABASE_URL

// const client = new Client({connectionString, })

// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
// })

// module.exports = client

// example from node-postgres
// const { Pool } = require('pg')
// const pool = new Pool()

module.exports = {
    async query(text, params) {
        const start = Date.now()
        const res = await pool.query(text, params)
        const duration = Date.now() - start
        console.log('executed query', { text, duration, rows: res.rowCount })

        return res
    },
    // used in transaction
    async getClient(callback) {
        const client = await pool.connect()
        const query = client.query
        const release = client.release
        
        const timeout = setTimeout(() => {
            console.error('It has been more than 5 seconds!')
            console.error(`The last executed query: ${client.lastQuery}`)
        }, 5000)
        // monkey patch?
        client.query = (...args) => {
            client.lastQuery = args
            return query.apply(client, args)
        }

        client.release = () => {
            clearTimeout(timeout)

            client.query = query
            client.release = release

            return release.apply(client)
        }
    }
}