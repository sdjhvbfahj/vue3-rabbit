import httpInstance from "@/utils/http.ts"

/**
 * @description: 获取二级分类列表
 * @param {*} id 分类id
 * @return {*}
 */
export function getSubCategoryAPI(id:string) {
    return httpInstance({
        url: '/category/sub/filter',
        params: {
            id: id
        }
    });
}
interface SubCategoryCategoriesItem {
    id: string,
    name: string
}
interface SubCategoryGoodsItem {
    id: string,
    name: string,
    desc: string,
    orderNum: number,
    picture: string,
    price: string
}
export interface SubCategoryItem {
    id: string,
    name: string,
    parentId: string,
    parentName: string,
    categories: SubCategoryCategoriesItem[],
    goods: SubCategoryGoodsItem[]
}