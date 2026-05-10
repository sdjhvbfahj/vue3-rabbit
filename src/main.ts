import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'
import {useIntersectionObserver} from '@vueuse/core'

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 实现一个图片懒加载的指令
app.directive('img-lazy', {
    mounted(el, binding) {
        // el: 指令绑定的那个元素 img
        // binding: binding.value 指令等于号后面绑定的表达式的值
        useIntersectionObserver(// 调用vueuse封装的组件
            el,
            ([entry], observerElement) => {
                // 判断是否进入可视区
                if(entry?.isIntersecting) {
                    // 进入可视区, 给img的src属性赋值，完成渲染
                    el.src = binding.value;
                    // 加载完立刻停止监听
                    observerElement.unobserve(el);
                }
            },
        )
    }
});

app.mount('#app');
