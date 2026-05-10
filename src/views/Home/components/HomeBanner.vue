<template>
    <div class="banner">
        <div class="block text-center" m="t-4">
            <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img :src="item.imgUrl">
            </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup lang="ts" name="HomeBanner">
    import {getBannerAPI, type BannerItem} from '@/apis/banner.ts'
    import {ref, onMounted} from 'vue'
    let bannerList = ref<BannerItem[]>([]);
    // 封装获取banner数据函数
    async function getBanner() {
        const result = await getBannerAPI() as any;
        bannerList.value = result.result;
    }
    onMounted(() => {
        // 挂载完毕后调用封装函数, 获取banner数据
        getBanner();
    })
</script>

<style scoped lang="scss">
    .banner {
        position: absolute;
        z-index: 1;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 500px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    :deep(.el-carousel__arrow--left) {
        left: 260px;
    }
</style>