<template>
    <div class="SubCategoryBrandcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: `/category/${parentId}` }">{{ parentName }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts" name="SubCategoryBrandcrumb">
    import {ArrowRight} from '@element-plus/icons-vue'
    defineProps(['parentName', 'parentId', 'name'])
</script>

<style scoped lang="scss">
    .SubCategoryBrandcrumb {
        margin: 25px 7px;
    }
</style>