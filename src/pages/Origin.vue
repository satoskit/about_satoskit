<template>
    <div>
        <h1>Origin!</h1>
        <p>Find the origin of satoskit!</p>
        <img src="../assets/sekaichizu.png" alt="World Map" width="540" height="370" usemap="#worldmap" >
        <map name="worldmap">
            <area shape="circle" coords="250, 113, 20" href="" alt="Japan!" title="Japan!" v-on:click="onclick">
        </map>
        <div v-if="clicked">
            <p>Japan!</p>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Origin',
    data() {
        return {
            clicked: false
        }
    },
    methods: {
        onclick(e) {
            e.preventDefault()
            this.clicked = true
        }
    }
}
</script>

<style>

</style>