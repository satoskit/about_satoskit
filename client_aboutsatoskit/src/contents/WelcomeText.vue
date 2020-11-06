<template>
<article>
    <p>Welcome to About satoskit!</p>
    <p>Satoskit is a software developer, currently located in Sweden. 
        Studied mainly Java at Java Enterprise Developer program at Yrgo in Göteborg, Sweden.
    </p>
    <p>This web application is a demo space to practice development skills.</p>
    <h3>Key Tools/Technologies in this application</h3>
    <p v-for="tool in tools" :key="tool.name">{{tool.name}}</p>
</article>
</template>

<script>
import { tools } from './content-data'

export default {
    name: 'WelcomeText',
    data() {
        return {
            tools: tools/*[
                { name: 'Java (EE, Spring)' },
                { name: 'JavaScript (React.js, Vue.js, Node.js)' },
                { name: 'SQL (MySQL, PostgreSQL)' },
                { name: 'API (RESTful)' },
                { name: 'Agile (Scrum, Kanban)' }
            ]*/
        }
    }
}
</script>

<style>

</style>