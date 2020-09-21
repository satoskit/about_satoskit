<template>
  <div class="cv-left-div" id="competences">
      <h3>Competences</h3>
      <div id="competences-block">
        <TileCompetence title="language" />
        <TileCompetence title="tool" />
        <TileCompetence title="database" />
        <TileCompetence title="other" />
      </div>
  </div>
</template>

<script>
import { competences } from '../contents/content-data'
import TileCompetence from './TileCompetence.vue'
export default {
    components: { TileCompetence },
    data() {
        return{
            competences: competences
        }
    }
}
</script>

<style scoped>
#competences-block {
    display: flex;
    padding-left: 0.5rem;
    /* flex-direction: column; */
}

</style>