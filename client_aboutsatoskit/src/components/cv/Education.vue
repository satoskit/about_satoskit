<template>
  <div class="cv-left-div" id="education">
      <h3>Education</h3>
      <h4>This section is working in progress...</h4>
      <table v-for="edu in education" :key="edu">
          <tr>
              <td class="time-column">{{edu.year}}<br>{{edu.length}}</td>
              <td class="cv-edu-exp-main-td"><strong>{{edu.title}}</strong>, {{edu.school}}, {{edu.location}}   <br>
                <span v-for="detail in edu.details" :key="detail">{{detail}}. </span></td>
          </tr>
      </table>
  </div>
</template>

<script>
import { education } from './../../contents/content-data'
export default {
    data() {
        return {
            education: education
        }
    }

}
</script>

<style scoped>
.time-column {
    /* width: 20%; */
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    min-width: 90px;
    vertical-align: text-top;
}
/* .main-column {
    width: 50%;
} */
</style>