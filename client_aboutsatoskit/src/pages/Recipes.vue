<template>
<div>
    <h3>Recipes!</h3>
    <button><router-link :to="`/Recipes/NewRecipe`">Add a new recipe!</router-link></button>
    <!-- <div id="recipe-cards"> -->
        <!-- <RecipeCard recipeTitle="A Recipe" />
        <RecipeCard recipeTitle="Delicious Recipe" />
        <RecipeCard recipeTitle="Sweet Recipe" />
        <RecipeCard recipeTitle="Spicy Recipe" />
        <RecipeCard recipeTitle="Easy Recipe" /> -->
        <RecipeCard />            
    <!-- </div> -->
</div>
</template>

<script>
import RecipeCard from '../contents/RecipeCard.vue'
export default {
    name: 'Recipes',
    components: {
        RecipeCard
    }
}
</script>

<style scoped>
* {
    text-decoration: none;
}
#recipe-cards {
    display: flex;
    flex-wrap: wrap;
}
</style>