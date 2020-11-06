/** queries for recipes */
export const createRecipesTable = `
    CREATE TABLE IF NOT EXISTS recipes (
        recipe_id INT GENERATED ALWAYS AS IDENTITY, 
        title VARCHAR(250), description TEXT, keywords VARCHAR[],
        PRIMARY KEY(recipe_id))
`
// add a recipe and return recipe id
export const addRecipe = `
    INSERT INTO recipes 
    (title, description, keywords)
    VALUES($1, $2, $3)
    RETURNING recipe_id
`

export const deleteRecipe = `
    DELETE FROM recipes
    WHERE recipe_id = $1
    RETURNING *
`

export const updateRecipe = `
    UPDATE recipes SET $1 = $2
    WHERE recipe_id = $3
    RETURNING *
`

export const getAllRecipes = `SELECT * FROM recipes;`
export const getAllItems = `SELECT * FROM $1`

export const getRecipeById = `
SELECT * FROM recipes WHERE recipe_id = $1
`
export const getItemById = `SELECT * FROM $1 WHERE recipe_id = $2`

/** queries for ingredients */
export const createIngredientsTable = `
    CREATE TABLE IF NOT EXISTS ingredients (
        ingredient_id INT GENERATED ALWAYS AS IDENTITY,
        recipe_id INT,
        name VARCHAR(100), amount FLOAT8, unit VARCHAR(100),
        PRIMARY KEY(ingredient_id),
        CONSTRAINT fk_recipe 
            FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id))
`

export const addIngredients = `
    INSERT INTO ingredients(recipe_id, name, amount, unit)
    VALUES ((SELECT recipe_id from recipes
        WHERE recipe_id = $1),
        $2, $3, $4)
`
// attempt to use WITH
`WITH ingredients(name, amount, unit) AS (SELECT recipe_id FROM recipes WHERE recipe_id = $1)`