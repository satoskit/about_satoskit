<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderMenu id="header-menu" />
    <transition><router-view id="contents" /></transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderMenu from './components/HeaderMenu.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HeaderMenu
  }
}
</script>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  /* text-align: center */
  color: $base-text-color
  margin: 0.5rem

#contents 
  margin: 1rem

</style>
