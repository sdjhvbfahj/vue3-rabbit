<template>
    <div class="Category wrapper">
        <CategoryBrandcrumb :category="category.name"/>
        <div class="banner">
            <CategoryBanner/>
        </div>
        <div class="goods">
            <CategoryGoods :secondCategory="category.children"/>
        </div>
    </div>
</template>

<script setup lang="ts" name="Category">
    import {getCategoryAPI, type CategoryItem} from '@/apis/category.ts'
    import {useRoute} from 'vue-router'
    import {ref, onMounted, watch} from 'vue'

    import CategoryBrandcrumb from './components/CategoryBrandcrumb.vue'
    import CategoryBanner from './components/CategoryBanner.vue'
    import CategoryGoods from './components/CategoryGoods.vue'

    let category = ref<CategoryItem>({} as CategoryItem);
    // 拿到当前页面的路由信息
    const route = useRoute();
    // 封装调用获取二级分类列表数据
    async function getCategory(id:string) {
        const result = await getCategoryAPI(id) as any;
        category.value = result.result;
        console.log(category.value)
    }
    onMounted(() => {
        getCategory(route.params.id as string);
    });
    // 监听路由id的变化
    watch(() => route.params.id, (newValue) => {
        if(newValue) {
            getCategory(newValue as string);
        }
    });
</script>

<style scoped>
    .wrapper {
        width: 1240px;
        margin: 0px auto;
    }
    .Category {
        .banner {
            position: relative;
            width: 100%;
            height: 500px;
        }
    }
</style>