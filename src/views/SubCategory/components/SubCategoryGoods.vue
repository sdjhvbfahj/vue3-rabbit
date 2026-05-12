<template>
    <div class="SubCategoryGoods">
        <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="默认排序" name="first">默认排序</el-tab-pane>
            <el-tab-pane label="最新商品" name="second">最新商品</el-tab-pane>
            <el-tab-pane label="最高人气" name="third">最高人气</el-tab-pane>
            <el-tab-pane label="评论最多" name="fourth">评论最多</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts" name="SubCategoryGoods">
    import { ref } from 'vue'
    const activeName = ref('first');
</script>

<style scoped lang="scss">
    .SubCategoryGoods {
        background-color: #fff;
        .demo-tabs {
            padding: 10px 25px;
        }
        .demo-tabs > .el-tabs__content {
            padding: 32px;
            color: #6b778c;
            font-size: 32px;
            font-weight: 600;
        }
    }
</style>