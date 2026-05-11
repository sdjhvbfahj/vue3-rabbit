import httpInstance from "@/utils/http.ts"

/**
 * @description: 获取二级分类列表
 * @param {*}
 * @return {*}
 */
export function getCategoryAPI(id:string) {
    return httpInstance({
        url: '/category',
        params: {
            id: id
        }
    })
}
interface CategoryChildrenGoods {
    id: string,
    name: string,
    picture: string,
    price: string,
    desc: string
}
interface CategoryChildren {
    id: string,
    name: string,
    picture: string,
    goods?: CategoryChildrenGoods[]
}
export interface CategoryItem {
    id: string,
    name: string,
    children?: CategoryChildren[]
}