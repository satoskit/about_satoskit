// not working at the moment...
const recipeRoutes = require('./recipeRoutes')

module.exports = app => {
    app.use('/recipes', recipeRoutes)
}