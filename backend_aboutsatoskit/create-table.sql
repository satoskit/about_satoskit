CREATE TABLE IF NOT EXISTS sampletable (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS recipes (
    recipe_id SERIAL PRIMARY KEY, 
    title VARCHAR(250) NOT NULL,
    recipe_description VARCHAR(500),
    keywords VARCHAR(50)[]
);

CREATE TABLE IF NOT EXISTS ingredients (
    ingredient_id SERIAL PRIMARY KEY,
    recipe_id INT,
    ingredient_name VARCHAR(250),
    amount FLOAT8,
    unit VARCHAR(100),
    CONSTRAINT fk_recipe
        FOREIGN KEY(recipe_id)
            REFERENCES recipes(recipe_id)
);

INSERT INTO recipes(title, recipe_description, keywords)
    VALUES(
        'A Recipe', 
        'A recipe with potatoes and tomatoes.',
        ARRAY[ 'simple', 'potato', 'tomato']
    ), (
        'Delicious Recipe',
        'A delicious recipe with cheese and garlic.',
        ARRAY[ 'cheese', 'garlic' ]
    ), (
        'Sweet Recipe',
        'A sweet recipe with milk and sugar.',
        ARRAY[ 'milk', 'sugar' ]
);

INSERT INTO ingredients(recipe_id, ingredient_name, amount, unit)
    VALUES(1, 'Potato', 1, 'kg'),
    (1, 'Tomato', 5, 'pieces')
;