import {getSubCategoryAPI, type SubCategoryItem} from '@/apis/subCategory.ts'
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'

export const useSubCategory = () => {
    // 定义一个ref响应式对象来接收数据
    let subCategoryList = ref<SubCategoryItem>({} as SubCategoryItem);
    const route = useRoute();
    // 封装获取数据的接口函数
    async function getSubCategory(id:string) {
        const result = await getSubCategoryAPI(id) as any;
        subCategoryList.value = result.result;
    }
    onMounted(() => {
        getSubCategory(route.params.id as string);
    })
    return {subCategoryList};
}