/** queries for recipes */
module.exports = {
    createRecipesTable : `
        CREATE TABLE IF NOT EXISTS recipes (
            recipe_id INT GENERATED ALWAYS AS IDENTITY, 
            title VARCHAR(250), recipe_description TEXT, keywords VARCHAR[],
            PRIMARY KEY(recipe_id))
    `,
    // add a recipe and return recipe id
    addRecipe : `
        INSERT INTO recipes 
        (title, description, keywords)
        VALUES($1, $2, $3)
        RETURNING recipe_id
    `,
    deleteRecipe : `
      DELETE FROM recipes
      WHERE recipe_id = $1
      RETURNING *
    `,
    updateRecipe : `
      UPDATE recipes SET $1 = $2
      WHERE recipe_id = $3
      RETURNING *
    `,
    getAllRecipes : `SELECT * FROM recipes`,

    getRecipeById : `SELECT * FROM recipes WHERE recipe_id = $1`
    ,
    getAllItems : `SELECT * FROM $1`,

    getRecipeById : `
        SELECT * FROM recipes
        WHERE recipe_id = $1
    `,
    getIngredientsByRecipeId : `
        SELECT * FROM ingredients
        WHERE recipe_id = $1
    `,
/** queries for ingredients */
    createIngredientsTable : `
        CREATE TABLE IF NOT EXISTS ingredients (
            ingredient_id INT GENERATED ALWAYS AS IDENTITY,
            recipe_id INT,
            name VARCHAR(100), amount FLOAT8, unit VARCHAR(100),
            PRIMARY KEY(ingredient_id),
            CONSTRAINT fk_recipe 
                FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id))
    `,
// }, {
    addIngredients : `
       INSERT INTO ingredients(recipe_id, name, amount, unit)
       VALUES ((SELECT recipe_id from recipes
           WHERE recipe_id = $1),
           $2, $3, $4)
    `
}

// attempt to use WITH
// `WITH ingredients(name, amount, unit) AS (SELECT recipe_id FROM recipes WHERE recipe_id = $1)`