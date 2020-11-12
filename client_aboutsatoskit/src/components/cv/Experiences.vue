<template>
  <div class="cv-left-div" id="experiences">
      <h3>Experiences</h3>
      <h4>This section is working in process...</h4>
      <table v-for="exp in experiences" :key="exp">
          <tr class="cv-edu-exp-tr">
              <td class="time-column">{{exp.year}}<br>{{exp.length}}</td>
              <td class="cv-edu-exp-main-td"><strong>{{exp.company}}</strong>,  {{exp.location}}<br>
                <span v-for="detail in exp.details" :key="detail">{{detail}}</span></td>
          </tr>
      </table>
  </div>
</template>

<script>
import { employment } from './../../contents/content-data'
export default {
    data() {
        return {
            experiences: employment
        }
    }
}
</script>

<style scoped>
.time-column {
    /* width: 20%; */
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    min-width: 104px;
    vertical-align: text-top;
}
</style>