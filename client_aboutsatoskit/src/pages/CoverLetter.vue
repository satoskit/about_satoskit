<template>
  <div id="coverletter">
      <div id="not-print">
          <p>Choose a language for spellcheck function</p>
          <select name="languages" id="languages" v-model="selectedLang">
              <option v-for="lang in languages" :key="lang" :value="lang.id">{{lang.name}}</option>
          </select>
      </div>
      <div id="not-print">
          <button v-on:click="doPrint">Print</button>
      </div>
      <div id="coverletter-header" contenteditable="contenteditable" spellcheck="true" :lang="selectedLang">
          <h2>Satomi Okuyama</h2>
          <p>Junior Fullstack Developer</p>
          <p v-if="selectedLang === 'en'">mobile: +46 76 231 0343 <span>e-mail: okuyamasatomi@gmail.com</span></p>
          <p v-else-if="selectedLang === 'sv'">mobil: +46 76 231 0343 <span>e-post: okuyamasatomi@gmail.com</span></p>
      </div>
      <div id="coverletter-body">
          <h3 contenteditable="contenteditable" spellcheck="true" :lang="selectedLang" v-if="selectedLang === 'en'">{{enTitle}}</h3>
          <h3 contenteditable="contenteditable" spellcheck="true" :lang="selectedLang" v-else-if="selectedLang === 'sv'">{{svTitle}}</h3>

          <p contenteditable="contenteditable" spellcheck="true" :lang="selectedLang" v-if="selectedLang === 'en'">{{enMessage}}</p>
          <p contenteditable="contenteditable" spellcheck="true" :lang="selectedLang" v-else-if="selectedLang === 'sv'">{{svMessage}}</p>
          <!-- <p v-for="paragraph in coverletterex" :key="paragraph">{{paragraph}}</p>
          <p>Med vänliga hälsningar, <br>Satomi Okuyama </p> -->
      </div>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
    data() {
        return {
            languages: [ 
                { id: 'en', name: 'English' }, 
                { id: 'sv', name: 'Svenska' }
            ],
            selectedLang: 'en',
            enTitle: "Application for...",
            svTitle: "Ansökan till...",
            enMessage: "Click here and write text...",
            svMessage: "Klicka här och skriv text..."
        }
    },
    methods: {
        doPrint() {
            window.print()
        }
    }
}
</script>

<style>
#coverletter {
    overflow: auto;
}
#coverletter-header {
    background-color: rgba(255, 99, 71, 0.7);/*tomato;*/
    text-align: center;
    padding: 0.8rem 0rem 0.8rem 0rem;
}
#coverletter-header p {
    margin-top: -1rem;
}
#coverletter-header span {
    padding-left: 2rem;
}
#coverletter-body h3 {
    text-align: center;
}
#coverletter-body p {
    font-size: 0.9rem;
}
#not-print {
    margin: 0.7rem;
}
/*******************/
/** for printing **/
/******************/
@media print {
    header, #not-print {
        display: none !important;
    }
}
</style>