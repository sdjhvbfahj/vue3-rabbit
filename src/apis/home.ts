import httpInstance from "@/utils/http"

// 向服务器请求banner图数据
// 将其封装成一个函数
export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner',
        method: 'GET'
    });
}
// 定义接口，限制返回banner数据的类型
export interface BannerItem {
    id: string,
    imgUrl: string
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function getNewAPI() {
    return httpInstance({
        url: '/home/new',
        method: 'GET'
    });
}
export interface NewItem {
    id: string,
    name: string,
    picture: string,
    price: string
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*} 
*/
export function getHotAPI() {
    return httpInstance({
        url: '/home/hot',
        method: 'GET'
    })
}
export interface HotItem {
    id: string,
    title: string,
    picture: string,
    alt: string
}
