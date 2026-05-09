<template>
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView></RouterView>
    <LayoutFooter/>
</template>

<script setup lang="ts" name="Layout">
    import LayoutNav from './components/LayoutNav.vue'
    import LayoutHeader from './components/LayoutHeader.vue'
    import LayoutFooter from './components/LayoutFooter.vue'
</script>

<style scoped>

</style>