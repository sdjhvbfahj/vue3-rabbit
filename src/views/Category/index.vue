<template>
    <div class="Category wrapper">
        <CategoryBrandcrumb :category="category.name"/>
    </div>
</template>

<script setup lang="ts" name="Category">
    import {getCategoryAPI, type CategoryItem} from '@/apis/category.ts'
    import {useRoute} from 'vue-router'
    import {ref, onMounted, onBeforeUpdate} from 'vue'

    import CategoryBrandcrumb from './components/CategoryBrandcrumb.vue'

    let category = ref<CategoryItem>({} as CategoryItem);
    // 拿到当前页面的路由信息
    const route = useRoute();
    // 封装调用获取二级分类列表数据
    async function getCategory(id:string) {
        const result = await getCategoryAPI(id) as any;
        category.value = result.result;
    }
    onMounted(() => {
        getCategory(route.params.id as string);
    });
    onBeforeUpdate(() => {
        getCategory(route.params.id as string);
    });
</script>

<style scoped>
    .wrapper {
        width: 1240px;
        margin: 0px auto;
    }
</style>