<template>
<div id="recipe-cards">
  <div id="recipe-card" v-for="(recipe, index) in recipes" :key="index">
    <router-link :to="`/Recipes/Recipe/${recipe.id}`" >
      <div id="recipe-title" :style="{ 'background-image': `url(${recipe.image})`}">
      </div>
      <div id="recipe-body">
        <h3>{{recipe.title}}</h3>
        <p>{{recipe.description}}</p>
        <p>Key words: <span v-for="(keyWords, index) in recipe.keyWords" :key="index">{{keyWords}} </span></p>
      </div>
    </router-link>
  </div>

</div>
</template>

<script>
import { recipes } from './recipe-data'

export default {
    name: 'RecipeCard',
    props: {
      recipeTitle: String,
      ingredients: Array
    },
    data () {
        return {
            recipes: recipes
        }
    }
}
</script>

<style scoped>
* {
  text-decoration: none;
  color: grey;
}
#recipe-cards {
  display: flex;
  flex-wrap: wrap;
}
#recipe-card {
  /* flex: 3; */
  border: 1px solid grey;
  margin: 1rem;
  /* padding: 1rem; */
  width: 350px;
}
#recipe-title {
  background-size: cover;
  height: 10rem;
  opacity: 0.8;
}
/* h3 {
  margin-top: 0rem;
  padding: 1rem;
} */
#recipe-body {
  padding: 1rem;
}
</style>