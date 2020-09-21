<template>
  <div id="cv">
    <h2>CV of Satomi Okuyama</h2>
    <div class="cv-blocks">
        <Profile />
        <div class="cv-inBlocks">
            <Competences />
            <Education />
        </div>
    </div>
    
    
  </div>
</template>

<script>
import { keywords } from '../contents/content-data'
import { competences } from '../contents/content-data'
import Profile from '../components/Profile.vue'
import Competences from '../components/Competences.vue'
import Education from '../components/Education.vue'

export default {
    components: { Profile, Competences, Education },
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

<style>
#cv {
    display: flex;
    flex-direction: column;
}
.cv-blocks {
    display: flex;
    flex-wrap: wrap;
}
.cv-inBlocks {
    display: flex;
    flex-direction: column;
    width: 70%;
}
.cv-left-div {
  padding: 1rem;
}
.cv-left-div > h3 {
    border-bottom: 0.4rem solid tomato;
}
</style>