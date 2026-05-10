<template>
    <LayoutNav/>
    <LayoutHeader/>
    <LayoutFixed/>
    <div style="height: 1400px"></div>
    <RouterView></RouterView>
    <LayoutFooter/>
</template>

<script setup lang="ts" name="Layout">
    import LayoutNav from './components/LayoutNav.vue'
    import LayoutHeader from './components/LayoutHeader.vue'
    import LayoutFooter from './components/LayoutFooter.vue'
    import LayoutFixed from './components/LayoutFixed.vue';
</script>

<style scoped>

</style>