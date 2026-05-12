<template>
    <div class="SubCategory wrapper">
        <SubCategoryBrandcrumb :parentName="subCategoryFilterList.parentName" :parentId="subCategoryFilterList.parentId" :name="subCategoryFilterList.name"/>
        <SubCategoryGoods :goods="subCategoryList.items"/>
    </div>
</template>

<script setup lang="ts" name="SubCategory">
    import SubCategoryBrandcrumb from './components/SubCategoryBrandcrumb.vue'
    import SubCategoryGoods from './components/SubCategoryGoods.vue'
    import {useSubCategory} from './composables/useSubCategory.ts'
    
    const {subCategoryFilterList, subCategoryList} = useSubCategory();
</script>

<style scoped lang="scss">
    .wrapper {
        width: 1240px;
        margin: 0px auto;
    }
</style>