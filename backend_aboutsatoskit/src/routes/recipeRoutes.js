const express = require('express')
const router = express.Router()

// API to wrap?
// const Router = require('express-promise-router')

const db = require('../database/dev/connection')
const recipeQueries = require('../database/dev/recipe-queries')

router.get('/get-all', async(req, res) => {
        const { rows } = await db.query(recipeQueries.getAllRecipes/*'SELECT * FROM recipes'*/, [])
        res.json(rows)
})

router.get('/recipe/:id', async(req, res) => {
    const { id } = req.params
    const { rows } = await db.query(recipeQueries.getRecipeById/*'SELECT * FROM recipes WHERE recipe_id = $1'*/, [ id ] )
    res.json(rows)
})

router.get('/ingredients/:id', async(req, res) => {
    const { id } = req.params
    const { rows } = await db.query(recipeQueries.getIngredientsByRecipeId/*'SELECT * FROM recipes WHERE recipe_id = $1'*/, [ id ] )
    res.json(rows)
})

module.exports = router