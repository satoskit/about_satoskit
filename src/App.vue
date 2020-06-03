<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderMenu id="header-menu" />
    <transition><router-view /></transition>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
#header-menu {
  display: flex;
  flex-direction: row;
  /* vertical-align: 0rem; */
}
</style>
