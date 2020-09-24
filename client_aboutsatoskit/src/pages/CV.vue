<template>
  <div id="cv">
    <p id="not-print"><em>Right click -> Print</em> to get the CV printed or in PDF!</p>
    <h2 id="cv-header">CV of Satomi Okuyama</h2>
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
import { keywords } from '../contents/content-data'
import { competences } from '../contents/content-data'
import Profile from '../components/Profile.vue'
import Competences from '../components/Competences.vue'
import Education from '../components/Education.vue'
import Experiences from '../components/Experiences.vue'

export default {
    components: { Profile, Competences, Education, Experiences },
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
}
#not-print {
    float: right;
    margin-right: 1rem;
}
/*******************/
/** for printing **/
/******************/
@media print {
    header, #not-print {
        display: none !important;
    }
    #cv {
        /* width: 2480px;
        height: 3508px; */
        /* overflow: auto; */
        position: relative;
        /* top: 10px; */
    }
    #profile {
        width: 190px;
        /* float: left; */
        display: inline-block;
    }
    .cv-inBlocks {
        width: 450px;
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