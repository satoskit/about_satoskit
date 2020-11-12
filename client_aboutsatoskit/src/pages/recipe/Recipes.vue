<template>
<div>
    <h3>Recipes!</h3>
    <p>This is a demo page to disaply/create recipes [WIP].</p>
    <button><router-link :to="`/Recipes/NewRecipe`">Add a new recipe!</router-link></button>
        <RecipeCard />            
</div>
</template>

<script>
import RecipeCard from '../../components/recipe/RecipeCard.vue'
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