<template>
  <div id="tile-competence">
      <h4>{{capitalizeFirstLetter}}</h4>
      <p v-for="$title in competences[titles]" :key="$title">{{$title.name}}: <font-awesome-icon :icon="$title.icon" /></p>
  </div>
</template>

<script>
import { competences } from '../contents/content-data'
export default {
    props: {
        title: {
            type: String
        }, 
    },
    data() {
        return {
            competences: competences,
            titles: this.title + 's',
        }
    },
    computed: {
        capitalizeFirstLetter: function() {
            return this.titles.charAt(0).toUpperCase() + this.titles.slice(1)
        }
    },
    methods: {
    }
}
</script>

<style scoped>
div {
    padding-right: 0.7rem;
}
h4 {
    border-bottom: 0.15rem solid tomato;
}
</style>