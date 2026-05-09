<template>
  <!-- 一级路由出口组件 -->
  <RouterView></RouterView>
  <div class="test">test scss</div>
</template>

<script setup lang="ts" name="App">

</script>

<style scoped lang="scss">
  .test {
    color: $xtxColor;
  }
</style>