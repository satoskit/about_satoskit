<template>
<div>
    <h3>New Recipe</h3>
    <h4>{{name}}</h4>
    <input v-model="recipeName" type="text">
    <h4>{{description}}</h4>
    <textarea name="description" id="" cols="80" rows="5"></textarea>
    <h4>{{ingredients}}</h4>
    <!-- <div id="ingredients">
        <div class="ingredient">
            <p>Name</p>
            <p>Amount</p>
            <p>Unit</p>
        </div>
        <div class="ingredient">
            
            <input v-model="ingredientName" type="text">
        </div>
        <div class="ingredient">
            <input v-model="ingredientAmount" type="number">
        </div>
        <div class="ingredient">
            <input v-model="ingredientUnit" type="text">
        </div>
    </div> -->
    <table>
        <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Unit</th>
        </tr>
        <tr v-for="n in totalIngredients" :key="n">
            <th><input v-model="ingredientNames[n-1]" type="text" required=true></th>
            <th><input v-model="ingredientAmount[n-1]" type="number"></th>
            <th><input v-model="ingredientUnit[n-1]" type="text" required="amountEntered"></th>
            <th><button @click="removeIngredient(n-1)"><font-awesome-icon icon="trash" /></button></th>
        </tr>
    </table>
        <button @click="addClicked">Add More</button>
        <p>{{ingredientNames}}
        {{ingredientAmount}}
        {{ingredientUnit}}
        {{totalIngredients}}</p>
        {{amountEntered}}

</div>
</template>

<script>
export default {
    name: 'NewRecipe',
    data() {
        return {
            name: 'Name of Recipe',
            description: 'Description of Recipe',
            ingredients: 'Ingredients',
            totalIngredients: 1,
            ingredientNames: [],
            ingredientAmount: [],
            ingredientUnit: [],
            amountEntered: false,
        }
    },
    methods: {
        addClicked() {
            this.totalIngredients ++
            if(this.ingredientNames.length !== this.ingredientAmount.length) {
                this.ingredientAmount.push('null')
            }
            if(this.ingredientNames.length !== this.ingredientUnit.length) {
                this.ingredientUnit.push('')
            }
        },
        removeIngredient(n) {
            this.ingredientNames = this.ingredientNames.filter((item, index) => index !== n)
            this.ingredientAmount = this.ingredientAmount.filter((item, index) => index !== n)
            this.ingredientUnit = this.ingredientUnit.filter((item, index) => index !== n)
            
            if(this.totalIngredients !== 1) { this.totalIngredients -- }
        }
    },
    watch: {
        ingredientAmount() {
            if(this.ingredientAmount !== null) {
                this.amountEntered = true
            }
        }
    }
}
</script>

<style scoped>
#ingredients {
    display: flex;
    flex-wrap: wrap;
}
.ingredient {
    /* flex-direction: column; */
    float: left;
    width: 12rem;
}
</style>