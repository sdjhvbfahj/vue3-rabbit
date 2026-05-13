import {getDetailAPI, type DetailItem} from '@/apis/detail.ts'
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'

export const useDetail = () => {
    const route = useRoute();
    const detailList = ref<DetailItem>({} as DetailItem);
    async function getDetail(id:string) {
        const result = await getDetailAPI(id) as any;
        detailList.value = result.result;
    }
    onMounted(() => {
        getDetail(route.params.id as string);
    })
    return {detailList};
}