// import { Pool } from 'pg'
// import dotenv from 'dotenv'

// dotenv.config()

// const databaseConfig = { connectionString: process.env.DATABASE_URL }
// const pool = new Pool(databaseConfig)

// export default pool

const { Pool } = require('pg')
const dotenv = require('dotenv')

const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString, })
// ({
//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD,
//     port: process.env.PASSWORD
// })

pool.connect()

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    // pool.end()
})

module.exports = pool