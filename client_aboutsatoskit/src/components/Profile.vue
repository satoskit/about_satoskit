<template>
  <div id="profile">
      <h4>Name: {{profile.name}}</h4>

      <h4>Languages</h4>
      <p class="p-loop" v-for="language in profile.languages" :key=language>{{language.language}}: {{language.level}}</p>

      <h4>Key Words</h4>
      <p class="p-loop" v-for="keyword in profile.keywords" :key=keyword>{{keyword}}</p>

      <h4>Interests</h4>
      <p>{{profile.interests.join(', ')}}</p>
  </div>
</template>

<script>
import { profile } from '../contents/content-data'
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
    width: 25%;
    background-color: rgba(255, 99, 71, 0.4);
    padding: 1rem;
}
.p-loop {
    line-height: 80%;
}
p {
    margin-left: 1rem;
}
</style>