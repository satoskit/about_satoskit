<template>
<div>
    <h3>Create a New Recipe</h3>
    <h4>Title of the recipe</h4>
    <input v-model="recipeTitle" type="text">
    <h4>A short description of the recipe </h4>
    <textarea v-model="description" name="description" id="" cols="80" rows="5"></textarea>
    <h4>Ingredients</h4>
    <table>
        <tr>
            <th><input v-model="ingredientName" type="text" placeholder="Name"></th>
            <th id="ingredientInput"><input v-model="ingredientAmount" type="number" placeholder="Amount in number"></th>
            <th id="ingredientInput"><input v-model="ingredientUnit" type="text" placeholder="Unit name (ex. g)"></th>
            <th><button @click="addClicked">Add this ingredient</button></th>
        </tr>
    <!-- display error message when the ingredient name is empty -->
        <tr v-if="ingredientErrorName">
            <td colspan="4" id="errorMessage">Please enter a name of the ingredient!</td>
        </tr>
        <tr v-if="ingredientErrorUnit">
            <td colspan="4" id="errorMessage">Please enter a unit name of the ingredient!</td>
        </tr>
        <tr v-else><p> </p></tr>
    
        <tr id="ingredientsTitle">
            <th>Name</th>
            <th>Amount</th>
            <th>Unit</th>
            <th></th>
        </tr>
        <tr id="ingredientsRows" v-for="item in ingredients" :key="item.ingredient_name">
            <td>{{item.ingredient_name}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.unit}}</td>
            <td><button @click="removeIngredient(item.ingredient_name)"><font-awesome-icon icon="trash" /></button></td>
        </tr>
        <tr v-if="ingredients.length == 0"><p> </p></tr>
    </table>
    
    <h4>Steps</h4>
</div>
</template>

<script>
import { recipeUrl } from '../../urls'
export default {
    name: 'NewRecipe',
    data() {
        return {
            recipeUrl: recipeUrl,

            recipeId: '',
            recipeTitle: '',
            description: '',
            ingredients: [],
            ingredientErrorName: false,
            ingredientErrorUnit: false,
            ingredientName: '',
            ingredientAmount: '',
            ingredientUnit: '',

            totalSteps: 1,
        }
    },
    created() {
        const header = { "Content-Type": "application/json" }
        console.log(recipeUrl + '/latest-recipe-id')
        fetch(recipeUrl + '/latest-recipe-id', { header })
            .then(async response => {
                const data = await response.json()
                console.log(data)
                if(!response.ok) {
                    const error = (data && data.message) || response.statusText
                    return Promise.reject(error)
                }
                this.recipeId = data.latest_recipe_id + 1
            })
            .catch(error => {
                this.errorMessage = error
                console.error('There was an error!', error)
            })
    },
    methods: {
        addClicked() {
            if(this.ingredientName === '') {
                this.ingredientErrorName = true
            } 
            if(this.ingredientUnit === '') { 
                this.ingredientErrorUnit = true
            } 
            
            if(this.ingredientErrorName !== '' && this.ingredientUnit !== '') {
                this.ingredients.push({ 
                    ingredient_name: this.ingredientName, 
                    amount: this.ingredientAmount,
                    unit: this.ingredientUnit
                })

                this.ingredientName = ''
                this.ingredientAmount = ''
                this.ingredientUnit = ''
            }
        },
        removeIngredient(nameToRemove) {
            this.ingredients = this.ingredients.filter(obj => obj.ingredient_name !== nameToRemove)
        },
    },
    watch: {
        ingredientName() {
            if(this.ingredientName.length >= 1) {
                this.ingredientErrorName = false
            }
        },
        ingredientUnit() {
            if(this.ingredientUnit.length >= 1) {
                this.ingredientErrorUnit = false
            }
        }
        

    }
}
</script>

<style scoped>
table {
    width: 40rem;
    border-collapse: collapse;
}
th:first-child {/*#ingredientTable1, #ingredientTable td {*/
    width: 12rem;
}
#ingredientInput input {
    width: 8rem;
}
th, td {/*#ingredientTable2 */
    text-align: center;
}
#errorMessage {
    text-align: left;
    padding-left: 3rem;
}
#ingredientsTitle th {
    border-bottom: 0.1rem solid grey;
}
</style>