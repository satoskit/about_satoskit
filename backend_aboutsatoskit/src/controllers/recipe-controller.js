const express = require('express')
const router = express.Router()

router.get('/getAll', (req, res, next) => {
    try{ 
        if(!req.query.s) throw new Error('Some error?')
        // res.json(await )
    } catch(error) {
        res.json({ error: error.message })
    }
})

const createRecipe = async (req, res) => {
    const { title, description, keywords } = req.body
}

app.get('/recipes/:id', (req, res, next) => {

})