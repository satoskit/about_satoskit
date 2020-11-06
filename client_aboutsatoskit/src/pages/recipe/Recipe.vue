<template>
<div>
  <h2>Recipe!</h2>
  <p>{{fetchedId}} or {{$route.params.id}}</p>
  <h3>{{demoRecipe.title}}</h3>

  <p>Ingredients</p>
  <p v-for="(ingredient, index) in demoRecipe.ingredients" :key="index">{{ingredient.name}}: {{ingredient.amount}} {{ingredient.unit}}</p>
</div>
</template>

<script>
import { demoRecipe } from '../../contents/recipe-data'

export default {
    name: 'Recipe',
    data() {
        return {
            fetchedId: this.$route.params.id,
            demoRecipe: demoRecipe
        }
    }
}
</script>

<style>

</style>