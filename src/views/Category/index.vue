<template>
    <div class="Category wrapper">
        <div class="brandcrumb">
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{ category.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script setup lang="ts" name="Category">
    import {ArrowRight} from '@element-plus/icons-vue'
    import {getCategoryAPI, type CategoryItem} from '@/apis/category.ts'
    import {useRoute} from 'vue-router'
    import {ref, onMounted, onBeforeUpdate} from 'vue'
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
    })
    onBeforeUpdate(() => {
        getCategory(route.params.id as string);
    })
</script>

<style scoped>
    .wrapper {
        width: 1240px;
        margin: 0px auto;
    }
</style>