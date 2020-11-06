// const pool = require('./pool')// from './pool'

// pool.on('connect', () => {
//     console.log('Connected to the database.')
// })

// const createSampleTable = () => {
//     const sampleQuery = `CREATE TABLE IF NOT EXISTS sample
//     (id SERIAL PRIMARY KEY,
//         name VARCHAR(20),
//         year INTEGER)
//     `
//     pool.query(sampleQuery)
//         .then((res) => {
//             pool.end()
//         })
// }

// const initiateTables = () => {
//     createSampleTable()
// }

// exports.initiateTables = initiateTables
// // module.exports = initiateTables

// // example from node-postgres
// // ;(async () => {
// //     const { rows } = await pool.query('SELECT * FROM users where id = $1', [1])
// //     console.log('User: ', rows[0])
// // })().catch(err => 
// //     setImmediate(() => { throw err })
// // )
// // pool.end() ???


// // async const initiateTables = () => {
// //     const createRecipesTableQuery = `
// //         CREATE TABLE IF NOT EXISTS recipes (
// //             recipe_id INT GENERATED ALWAYS AS IDENTITY, 
// //             title VARCHAR(250), description TEXT, keywords VARCHAR[],
// //             PRIMARY KEY(recipe_id)
// //         );
// //         CREATE TABLE IF NOT EXISTS ingredients (
// //             ingredient_id INT GENERATED ALWAYS AS IDENTITY,
// //             recipe_id INT,
// //             name VARCHAR(100), amount FLOAT8, unit VARCHAR(100),
// //             PRIMARY KEY(ingredient_id),
// //             CONSTRAINT fk_recipe 
// //                 FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id)
// //         );`
// //     pool.query(createRecipesTableQuery)
// //         .then((res) => {
// //             console.log(res)
// //             pool.end()
// //         })
// //         .catch((err) => {
// //             console.log(err)
// //             pool.end()
// //         })

// //     // await pool.connect()
// //     //     .catch(err => {
// //     //         console.log(err)
// //     // })
    
// // }

// // export { initiateTables }