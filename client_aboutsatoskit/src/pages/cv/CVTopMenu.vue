<template>
  <div id="cv-top">
      <router-link :to="`/CV/CV`" tag="button">View CV</router-link>
      <router-link :to="`/CV/CoverLetter`" tag="button">Generate Cover Letter</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
#cv-top

button
  display: flex
  margin-left: auto
  margin-right: auto
  margin-top: 1rem
  padding: 1rem
  font-size: 1.5rem
  cursor: pointer
  color: $theme-title-color
  background-color: $theme-color
  border: none
  
a
  text-decoration: none
a:visited
  color: $theme-title-color
</style>