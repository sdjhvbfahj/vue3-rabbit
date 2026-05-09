<template>
    <div class="LayoutHeader">
        <div class="wrapper">
            <!-- logo -->
            <div class="logo">
                <h1><a href="javascript:;">小兔鲜儿</a></h1>
            </div>
            <!-- 导航 -->
            <div class="nav">
                <ul>
                    <li><a href="javascript:;">首页</a></li>
                    <li><a href="javascript:;">居家</a></li>
                    <li><a href="javascript:;">美食</a></li>
                </ul>
            </div>
            <!-- 搜索 -->
            <div class="search">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" placeholder="搜一搜">
            </div>
            <!-- 购物车 -->
            <div class="cart">
                <i class="iconfont icon-3"></i>
                <p>0</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="LayoutHeader">
    
</script>

<style scoped lang="scss">
    .LayoutHeader {
        width: 100%;
        height: 132px;
        background-color: #fff;
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1240px;
        margin: 0px auto;
        height: 100%;
    }
    .logo h1 a {
        font-size: 0px;
        display: block;
        width: 200px;
        height: 88px;
        background-image: url(@/assets/images/logo.png);
        background-size: contain;
        background-repeat: no-repeat;
    }
    .nav {
        flex: 1;
    }
    .nav ul {
        display: flex;
        padding-left: 30px;
    }
    .nav ul li{
        margin-right: 30px;
    }
    .nav ul li a{
        display: inline-block;
        font-size: 16px;
        height: 32px;
        line-height: 32px;
    }
    .search {
        display: flex;
        border-bottom: 2px solid #f4f4f4;
        width: 170px;
        height: 28px;
    }
    .search .iconfont {
        color: #333;
        font-size: 22px;
    }
    .search input {
        margin-left: 6px;
        width: 0px;
        flex: 1;
        border: 0px;
        outline: none;
    }
    .search input::placeholder {
        color: #ccc;
        font-size: 14px;
    }
    .cart {
        position: relative;
        margin-left: 15px;
    }
    .cart .iconfont {
        margin-top: 2px;
        font-size: 26px;
    }
    .cart p {
        display: block;
        padding: 1px 5px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: -5px;
        left: 14px;
        color: #fff;
    }
</style>