export const demoRecipeIndex = [
    { 
        id: 1,
        title: 'A Recipe',
        description: 'A recipe with potatoes and tomatoes.',
        keyWords: [ 'simple', 'potatoes', 'tomatoes' ],
        image: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg',
    },{   
        id: 2,                 
        title: 'Delicious Recipe',
        description: 'A delicous recipe with chicken and garlic.',
        keyWords: [ 'chicken', 'garlic' ]
    },{ 
        id: 3,
        title: 'Sweet Recipe',
        description: 'A sweet recipe with milk and sugar.',
        keyWords: [ 'milk', 'sugar' ]
    },
]


export const demoRecipe = {
    id: 3,
    title: 'Sweet Recipe',
    description: 'A sweet recipe with milk and sugar.',
    image: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg',
    ingredients: [
        { 
            name: 'milk',
            amount: 5,
            unit: 'dl' 
        },{ 
            name: 'sugar',
            amount: 100,
            unit: 'g' 
        },
    ]
}

export const inputFields = [
    { name: 'Name of Recipe' },
    { name: 'Ingredients' }
]