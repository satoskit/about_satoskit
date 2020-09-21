<template>
  <div id="cv">
    <h2>CV of Satomi Okuyama</h2>
    <div class="blocks">
        <Profile />
        <div class="block">
            <h3>Competences</h3>
            <div class="inBlocks">
                <div class="inBlock">
                    <h4>Languages</h4>
                    <div v-for="competence in competences" :key="competence">
                    <p v-for="language in competence.languages" :key="language">
                        {{language.name}}: <font-awesome-icon :icon="language.icon" /></p>
                    </div>
                </div>
                <div class="inBlock">
                    <h4>Databases</h4>
                    <div v-for="competence in competences" :key="competence">
                    <p v-for="database in competence.database" :key="database">
                        {{database.name}}: <font-awesome-icon :icon="database.icon" /></p>
                    </div>
                </div>
                <div class="inBlock">
                    <h4>Others</h4>
                    <div v-for="competence in competences" :key="competence">
                    <p v-for="other in competence.others" :key="other">
                        {{other.name}}: <font-awesome-icon :icon="other.icon" /></p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    
    
  </div>
</template>

<script>
import { keywords } from '../contents/content-data'
import { competences } from '../contents/content-data'
import Profile from '../components/Profile.vue'

export default {
    components: { Profile },
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