import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history', /* ??? */
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Recipes',
            name: 'recipe-root',
            component: () => import('./pages/recipe/RecipeIndex.vue'),
            children: [
                {
                    path: '',
                    name: 'recipes',
                    component: () => import('./pages/recipe/Recipes.vue')
                },
                {
                    path: 'Recipe/:id',
                    name: 'recipeid',
                    component: () => import('./pages/recipe/Recipe.vue')
                },
                {
                    path: 'NewRecipe',
                    name: 'new-recipe',
                    component: () => import('./pages/recipe/NewRecipe.vue')
                },
            ]
        },
        {
            path: '/Origin',
            name: 'origin',
            component: () => import('./pages/Origin.vue')
        },
        {
            path: '/CV',
            name: 'cv-root',
            component: () => import('./pages/cv/CVIndex.vue'),
            children: [
                {
                    path: '',
                    name: 'cv',
                    component: () => import('./pages/cv/CVTopMenu.vue')
                },
                {
                    path: 'CV',
                    name: 'cv',
                    component: () => import('./pages/cv/CV.vue')
                },
                {
                    path: 'CoverLetter',
                    name: 'coverletter',
                    component: () => import('./pages/cv/CoverLetter.vue')
                }
            ]
        },
        {
            path: '/Contact',
            name: 'contact',
            component: () => import('./pages/Contact.vue')
        },
    ]
})

export default router