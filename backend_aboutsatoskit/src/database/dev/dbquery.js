import pool from './pool'

export default {
    /** 
     * db query
     * @param {object} req
     * @param {object} res
     * @returns {object} object
     * **/

    query(queryText, params) {
        return new Promise((resolve, reject) => {
            pool.query(queryText, params)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },

    
    //* from node-postgres *//
    // query(text, params, callback) {
    //     const start = Date.now()
    //     return pool.query(text, params, (err, res) => {
    //         const duration = Date.now() - start
    //         console.log('Executed query', { text, duration, rows: res.rowCount })
    //         callback(err, res)
    //     })
    // },
    
    getClient(callback) {
        pool.connect((err, client, done) => {
            
            const release = (err) => {
                done(err)
            }
            callback(err, client, release)
        })
    }
}
