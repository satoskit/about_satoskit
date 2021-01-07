const express = require('express')
const router = express.Router()

// API to wrap?
// const Router = require('express-promise-router')

const db = require('../database/dev/connection')
const recipeQueries = require('../database/dev/recipe-queries')

// get all recipes
router.get('/get-all', async(req, res) => {
        const { rows } = await db.query(recipeQueries.getAllRecipes/*'SELECT * FROM recipes'*/, [])
        res.json(rows)
})
// get a recipe by recipe_id
router.get('/recipe/:id', async(req, res) => {
    const { id } = req.params
    const { rows } = await db.query(recipeQueries.getRecipeById/*'SELECT * FROM recipes WHERE recipe_id = $1'*/, [ id ] )
    res.json(rows)
})
// get ingredients by recipe_id
router.get('/ingredients/:id', async(req, res) => {
    const { id } = req.params
    const { rows } = await db.query(recipeQueries.getIngredientsByRecipeId/*'SELECT * FROM recipes WHERE recipe_id = $1'*/, [ id ] )
    res.json(rows)
})
// get the latest recipe_id
router.get('/latest-recipe-id', async(req, res) => {
    const { rows } = await db.query(recipeQueries.getBiggestId, [])
    res.json(rows[0])
})

module.exports = router