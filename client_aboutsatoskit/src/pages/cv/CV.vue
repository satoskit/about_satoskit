<template>
  <div id="cv">
    <button id="not-print" v-on:click="doPrint">Print this CV</button>
    <h2 id="cv-header">CV</h2>
    <div class="cv-blocks">
        <Profile />
        <div class="cv-inBlocks">
            <Competences />
            <Education />
            <Experiences />
        </div>
    </div>
  </div>
</template>

<script>
import { keywords } from './../../contents/content-data'
import { competences } from './../../contents/content-data'
import Profile from './../../components/cv/Profile.vue'
import Competences from './../../components/cv/Competences.vue'
import Education from './../../components/cv/Education.vue'
import Experiences from './../../components/cv/Experiences.vue'

export default {
    components: { Profile, Competences, Education, Experiences },
    data() {
        return {
            keywords: keywords,
            competences: competences
        }
    },
    methods: {
        doPrint() {
            window.print()
        },
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
    /* display: flex;
    flex-direction: row; */
    overflow: auto;
}
.cv-blocks {
    /* display: flex;
    flex-wrap: wrap; */
    float: left;
}
#profile {
    display: inline-block;
    vertical-align: top;
}
.cv-inBlocks {
    /* display: flex;
    flex-direction: column; */
    width: 70%;
    display: inline-block;
    vertical-align: top;
}
.cv-left-div {
  padding: 1rem;
}
.cv-left-div > h3 {
    border-bottom: 0.4rem solid tomato;
}
.cv-edu-exp-main-td {
    padding-bottom: 0.5rem;
}

#cv-header {
    min-width: 30rem;
    display: inline !important;
    margin-left: 1rem;
}
#not-print {
    float: right;
    margin-right: 1rem;
}
button#not-print  {
    padding: 0.4rem;
}
/*******************/
/** for printing **/
/******************/
@media print {
    header, #not-print {
        display: none !important;
    }
    #cv {
        width: 210mm;
        height: 297mm;
        /* overflow: auto; */
        position: relative;
        /* top: 10px; */
    }
    #profile {
        width: 20%;
        /* float: left; */
        display: inline-block;
    }
    .cv-inBlocks {
        width: 65%;
        /* float: left; */
        display: inline-block;
    }
    /** font related **/
    #cv-header {
        text-align: center;
    }
    #profile span {
        font-size: 15px;
    }
    #profile h3 {
        font-size: 17px;
    }
    #tile-competence > p,  .cv-edu-exp-main-td {
        font-size: 10px;
    }
    .time-column {
        font-size: 7px;
    }
    #tile-competence > p {
        line-height: 55%;
    }
    /** adjustment to fit in one page **/
    #cv {
        margin: 0rem;
    }
    #competences  {
        margin-top: -1.7rem;
        /* margin-bottom: -2rem !important; */
        padding-bottom: -2.5rem !important;
    }
    #education, #experiences {
        margin-top: -3rem;
        padding-bottom: 0.4rem;
    }
    #cv > h2 {
        margin-top: -3rem;
        padding-bottom: 0 !important;
    }
    #competences > h3 {
        margin-bottom: 0 !important;
    }
}
</style>