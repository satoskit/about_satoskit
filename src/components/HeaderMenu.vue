<template>
    <header>
        <h1 id="site-title">{{title}}</h1>
        <div id="menus">
            <p id="menu" v-for="menu in menus" :key="menu.name">{{ menu.name }}</p>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderMenu',
    data() {
        return {
            title: 'About satoskit',
            menus: [ 
                { name: 'Origin' }, 
                { name: 'Contact' }
            ]
        }
    }
}
</script>

<style>
#site-title {
    padding: 0rem 1rem 0rem 1rem;
}
#menus {
    display: flex;
    flex-direction: row;
}
#menu {
    padding: 0rem 1rem 0rem 1rem;
}
</style>