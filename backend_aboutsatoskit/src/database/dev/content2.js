const pool = require('./pool')

const somequery = (queryText, params) => {
    query(queryText, params)
        .then((res) => {
            resolve(res)
        })
        .catch((err) => {
            reject(err)
        })

}

exports.somequery = somequery