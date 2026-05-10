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
