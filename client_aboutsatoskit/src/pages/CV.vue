<template>
  <div id="cv">
    <h2>CV of Satomi Okuyama</h2>
    <div class="blocks">
        <Profile />
        <Competences />
    </div>
    
    
  </div>
</template>

<script>
import { keywords } from '../contents/content-data'
import { competences } from '../contents/content-data'
import Profile from '../components/Profile.vue'
import Competences from '../components/Competences.vue'

export default {
    components: { Profile, Competences },
    data() {
        return {
            keywords: keywords,
            competences: competences
        }
    },
    methods: {
        // not work
        convertToIcons(n) {
            switch (n) {
                case 1: return `<font-awesome-icon :icon="['fas', 'thumbs-up']" />`
                case 2: return <font-awesome-icon icon="leaf"></ font-awesome-icon> //`<font-awesome-icon :icon="['fas', 'thumbs-up']"></ font-awesome-icon>`
            }
        }
    }
}
</script>

<style scoped>
#id {
    display: flex;
    flex-direction: column;
}
.blocks, .inBlocks {
    display: flex;
    flex-wrap: wrap;
}
.block {
    margin: 1rem;
}
.inBlock {
    /* margin-right: 1rem; */
    margin-left: 1rem;
}
#keywords > p {
    margin-left: 0.5rem;
}

</style>