<template>
    <header>
        <router-link to="/">
            <h1>{{title}}</h1>
        </router-link>
        <div id="menus">
            <p id="menu" v-for="menu in menus" :key="menu.name" ><router-link :to="`/${menu.name}`">{{ menu.name }}</router-link></p>
        </div>
    </header>
</template>

<script>
import { menus } from '../contents/content-data'

export default {
    name: 'HeaderMenu',
    data() {
        return {
            title: 'About satoskit',
            menus: menus
        }
    }
}
</script>

<style scoped lang="sass">
* 
  background-color: $theme-color
  text-decoration: none
  color: $header-text-color
  display: flex
  flex-direction: row

h1 
  padding: 0rem 1rem 0rem 1rem

#menus 
  display: flex
  flex-direction: row

#menu 
  padding: 1rem 1rem 0rem 1rem

</style>