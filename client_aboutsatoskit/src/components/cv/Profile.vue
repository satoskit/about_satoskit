<template>
  <div id="profile">
      <h3><span>Name:</span> {{profile.name}}</h3>

      <h3>Languages</h3>
      <p class="p-loop" v-for="language in profile.languages" :key=language><b>{{language.language}}</b>: {{language.level}}</p>

      <h3>Key Words</h3>
      <p class="p-loop" v-for="keyword in profile.keywords" :key=keyword>{{keyword}}</p>

      <h3>Interests</h3>
      <p>{{profile.interests.join(', ')}}</p>
  </div>
</template>

<script>
import { profile } from '../../contents/content-data'
export default {
    data() {
        return {
            profile: profile,
        }
    },
    methods: {
    }

}
</script>

<style scoped>
#profile {
    min-width: 190px;
    width: 25%;
    background-color: rgba(255, 99, 71, 0.4);
    padding: 1rem;
}
.p-loop {
    line-height: 80%;
}
p {
    margin-left: 1rem;
    margin-right: 0.8rem;
}
</style>