<template>
    <article>
        <p>About satoskit!</p>
        <welcome-text />
    </article>
</template>

<script>
import WelcomeText from '../contents/WelcomeText.vue'

export default {
    name: 'Home',
    components: {
        WelcomeText
    }
}
</script>