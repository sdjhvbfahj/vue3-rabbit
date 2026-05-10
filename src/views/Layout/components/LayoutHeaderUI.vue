<template>
    <!-- 导航 -->
    <div class="nav">
        <ul>
            <li><RouterLink to="/">首页</RouterLink></li>
            <li v-for="item in categoryList" :key="item.id"><RouterLink to="/">{{ item.name }}</RouterLink></li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LayoutHeaderUI">
    import {getCategoryAPI,type CategroyItem} from '@/apis/layout.ts'
    import {ref, onBeforeMount} from 'vue'
    // 复制导航分类类别的数据
    let categoryList = ref<CategroyItem[]>([]);
    // 封装分类数据的渲染函数
    const getCategory = async () => {
        const result = await getCategoryAPI() as any;
        categoryList.value = result.result as CategroyItem[];
    }
    onBeforeMount(() => {
        // 挂载完成后渲染分类数据
        getCategory();
    });
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