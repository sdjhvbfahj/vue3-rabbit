<template>
    <div class="HomeProduct" v-for="item in goodsList" :key="item.id">
        <div class="wrapper">
            <HomeProductPanel :title="item.name" :category="item.children">
                
            </HomeProductPanel>
        </div>
    </div>
</template>

<script setup lang="ts" name="HomeProduct">
    import HomeProductPanel from './HomeProductPanel.vue'
    import {getGoodsAPI, type GoodsCategoryItem} from '@/apis/home.ts'
    import {ref, onMounted} from 'vue'
    // 定义ref数据, 用于接收goods数据
    let goodsList = ref<GoodsCategoryItem[]>([]);
    async function getGoods() {
        const result = await getGoodsAPI() as any;
        goodsList = result.result;
    }
    onMounted(() => {
        getGoods();
    })
</script>

<style scoped lang="scss">
    .HomeProduct {
        height: 725px;
        width: 100%;
        background-color: #fff;
        .wrapper {
            width: 1240px;
            margin: 0px auto;
            height: 100%;
        }
    }
</style>