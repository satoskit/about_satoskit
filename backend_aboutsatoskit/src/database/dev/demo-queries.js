const { request } = require('express')
const pool = require('./pool')

const getAll = (req, res) => {
    pool.query('SELECT * FROM sampletable', (error, result) => {
        if(error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

module.exports = { getAll }