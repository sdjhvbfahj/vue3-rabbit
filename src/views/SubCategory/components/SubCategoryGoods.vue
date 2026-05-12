<template>
    <div class="SubCategoryGoods">
        <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="最新商品" name="first"></el-tab-pane>
            <el-tab-pane label="最高人气" name="second"></el-tab-pane>
            <el-tab-pane label="评论最多" name="third"></el-tab-pane>
        </el-tabs>
        <div class="goods">
            <ul>
                <li v-for="item in goods" :key="item.id">
                    <GoodsItem :goods="item"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts" name="SubCategoryGoods">
    import { ref } from 'vue'
    import GoodsItem from '@/views/Home/components/GoodsItem.vue'
    defineProps(['goods']);
    const activeName = ref('first');
</script>

<style scoped lang="scss">
    .SubCategoryGoods {
        background-color: #fff;
        padding: 10px 25px;
        .demo-tabs > .el-tabs__content {
            padding: 32px;
            color: #6b778c;
            font-size: 32px;
            font-weight: 600;
        }
        .goods {
            width: 100%;
            margin-top: 20px;
            ul {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li {
                    width: 220px;
                    height: 300px;
                    :deep(a) {
                        position: relative;
                        top: 0px;
                        padding: 15px 30px;
                        text-align: center;
                        transition: all 0.3s;
                        &:hover {
                            top: -3px;
                            box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.2);
                        }
                    }
                    :deep(a .info h4) {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    :deep(a .info p) {
                        color: #999;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>