<template>
    <!-- 导航 -->
    <div class="nav">
        <ul>
            <li><RouterLink to="/">首页</RouterLink></li>
            <li v-for="item in categoryStore.categoryList" :key="item.id"><RouterLink to="/">{{ item.name }}</RouterLink></li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LayoutHeaderUI">
    import { useCategoryStore } from '@/stores/categoryStore.ts'
    // 可以直接获取pinia中暴露出来的数据(index.vue文件已经初始化数据了)
    const categoryStore = useCategoryStore();
</script>

<style scoped lang="scss">
    .nav {
        flex: 1;
    }
    .nav ul {
        display: flex;
        padding-left: 30px;
    }
    .nav ul li{
        margin-right: 44px;
    }
    .nav ul li a{
        display: inline-block;
        font-size: 16px;
        height: 32px;
        line-height: 32px;
    }
    .nav ul li a:hover {
        color: $sucColor;
        border-bottom: 1px solid $sucColor;
    }
</style>