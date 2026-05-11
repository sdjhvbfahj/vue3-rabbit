<template>
    <div class="HomeProduct" v-for="item in goodsList" :key="item.id">
        <div class="wrapper">
            <HomeProductPanel :title="item.name" :category="item.children">
                <!-- 默认插槽 -->
                <div class="content">
                    <div class="left">
                        <RouterLink to="/">
                            <img v-img-lazy="item.picture">
                        </RouterLink>
                    </div>
                    <div class="right">
                        <ul>
                            <li v-for="goods in item.goods" :key="goods.id">
                                <RouterLink to="/">
                                    <div class="pic">
                                        <img v-img-lazy="goods.picture">
                                    </div>
                                    <div class="info">
                                        <h4>{{ goods.name }}</h4>
                                        <p>{{ goods.desc }}</p>
                                    </div>
                                    <p class="price">¥ <span>{{ goods.price }}</span></p>
                                </RouterLink>
                                <!-- 鼠标悬停出现的更多宝贝的提示页面 -->
                                <div class="cover">
                                    <RouterLink to="/">
                                        <p>找相似</p>
                                        <p></p>
                                        <p>发现更多宝贝<span class="iconfont icon-jinru"></span></p>
                                    </RouterLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
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
        goodsList.value = result.result;
        console.log(goodsList.value)
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
            .content {
                display: flex;
                justify-content: space-between;
                height: 600px;
                .left {
                    width: 248px;
                    height: 610px;
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        img {
                            width: 610px;
                            height: 610px;
                            object-fit: cover;
                            object-position: center;
                        }
                    }
                }
                .right ul {
                    width: 968px;
                    height: 600px;
                    display: flex;
                    flex-wrap: wrap;
                    li {
                        position: relative;
                        overflow: hidden;
                        border: 2px solid #fff;
                        padding: 12px 21px 0px;
                        width: 242px;
                        height: 300px;
                        transition: all 0.5s;
                        a {
                            display: block;
                            width: 200px;
                            height: 100%;
                            img {
                                width: 200px;
                                height: 171px;
                            }
                            .info {
                                display: flex;
                                flex-direction: column;
                                justify-content: space-evenly;
                                margin-top: 10px;
                                width: 100%;
                                height: 70px;
                                h4 {
                                    font-size: 16px;
                                    line-height: 19px;
                                    font-weight: 400;
                                }
                                p {
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    font-size: 16px;
                                    line-height: 19px;
                                    margin-top: 5px;
                                }
                            }
                            .price {
                                color: $priceColor;
                                font-size: 20px;
                                span {
                                    font-size: 22px;
                                }
                            }
                        }
                        .cover {
                            position: absolute;
                            left: 0px;
                            bottom: -84px;
                            width: 242px;
                            height: 84px;
                            background-color: #00BE9A;
                            transition: all 0.5s;
                            a {
                                display: block;
                                width: 100%;
                                height: 100%;
                                text-align: center;
                                p:first-child {
                                    margin: 15px 0px 6px;
                                    font-size: 18px;
                                    color: #fff;
                                }
                                p:nth-child(2) {
                                    display: block;
                                    margin: 3px auto;
                                    width: 100px;
                                    height: 1px;
                                    background-color: #fff;
                                }
                                p:last-child {
                                    display: block;
                                    margin-top: 6px;
                                    font-size: 13px;
                                    color: #fff;
                                    .iconfont {
                                        vertical-align: middle;
                                        font-size: 13px;
                                        color: #fff;
                                    }
                                }
                            }
                        }
                        &:hover .cover {
                            bottom: 0px;
                        }
                        &:hover {
                            border: 2px solid #00be9a;
                        }
                    }
                }
            }
        }
    }
</style>