<template>
  <div>
      <p>{{profile.name}}</p>
  </div>
</template>

<script>
import { profile } from '../contents/content-data'
export default {
    data() {
        return {
            profile: profile,
        }
    }

}
</script>

<style>

</style>