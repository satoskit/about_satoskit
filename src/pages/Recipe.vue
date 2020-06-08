<template>
<div>
  <h2>Recipe!</h2>
  <p>{{fetchedId}}</p>
  <p>{{recipeData.text}}</p>

  <p>Ingredients</p>
  <p v-for="(ingredient, index) in recipeData.ingredients" :key="index">{{ingredient.name}}: {{ingredient.amount}} {{ingredient.unit}}</p>
</div>
</template>

<script>
export default {
    name: 'Recipe',
    data() {
        return {
            fetchedId: this.$route.params.id,
            recipeData: { 
                id: 1,
                title: 'A Recipe',
                text: 'Demo recipe. Easy fast few ingredients!',
                ingredients: [
                    { 
                        name: 'potatoes',
                        amount: 8,
                        unit: 'pieces' },
                    { 
                        name: 'tomatoes',
                        amount: 3,
                        unit: 'pieces' },
                ]
            },
        }
    }
}
</script>

<style>

</style>