const { request } = require('express')
const pool = require('./pool')

const getAll = (req, res) => {
    pool.query('SELECT * FROM sampletable', (error, result) => {
        try {
            res.status(200).json(result.rows)
        } catch (error) {
            next(error)
        }
    })
}

module.exports = { getAll }