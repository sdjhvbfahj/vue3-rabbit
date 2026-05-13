import httpInstance from "@/utils/http.ts"

/**
 * @description: 获取一级分类列表
 * @param {*}
 * @return {*}
 */
export function getDetailAPI(id:string) {
    return httpInstance({
        url: '/goods',
        params: {
            id: id
        }
    });
}
interface DetailBrandItem {
    id: string,
    desc: string,
    logo: string,
    name: string,
    nameEn: string,
    picture: string,
}
interface DetailCategoriesItem {
    id: string,
    name: string
}
interface DetailHotByDayItem {
    desc: string,
    id: string,
    name: string,
    picture: string,
    price: string
}
interface DetailDetailsPropertiesItem {
    name: string,
    value: string
}
interface DetailDetailsItem {
    picture: string[],
    properties: DetailDetailsPropertiesItem[]
}
export interface DetailItem {
    id: string,
    name: string,
    price: string,
    oldPrice: string,
    brand: DetailBrandItem,
    categories: DetailCategoriesItem[],
    hotByDay:DetailHotByDayItem[],
    details: DetailDetailsItem,
    salesCount: number,
    commentCount: number,
    collectCount: number,
}