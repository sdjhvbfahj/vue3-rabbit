<template>
    <div class="LayoutNav">
        <div class="wrapper">
            <ul>
                <li v-for="item in navigationOptions" :key="item.id">
                    <a :href="item.jumpURL">{{ item.option }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts" name="LayoutNav">
    import {reactive} from 'vue'
    let navigationOptions = reactive([
        {id:'01', option:'请先登录', jumpURL:'javascript:;'},
        {id:'02', option:'免费注册', jumpURL:'javascript:;'},
        {id:'03', option:'我的订单', jumpURL:'javascript:;'},
        {id:'04', option:'会员中心', jumpURL:'javascript:;'},
        {id:'05', option:'帮助中心', jumpURL:'javascript:;'},
        {id:'06', option:'关于我们', jumpURL:'javascript:;'},
        {id:'07', option:'手机版', jumpURL:'javascript:;'},
    ]);
</script>

<style scoped lang="scss">
    .LayoutNav {
        width: 100%;
        height: 53px;
        background-color: #333;
    }
    .wrapper {
        width: 1240px;
        margin: 0px auto;
        height: 100%;
    }
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    a {
        display: inline-block;
        font-size: 14px;
        line-height: 1;
        color: #cdcdcd;
        padding: 0px 15px;
        border-right: 2px solid #ccc;
    }
    li:last-child a {
        border-right: none;
    }
</style>