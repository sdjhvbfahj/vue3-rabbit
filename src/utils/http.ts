// axios基础的封装
import axios from 'axios'

const httpInstance = axios.create({
    // 1.配置接口基地址
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    // 2.配置接口超时时间
    timeout: 5000
});

// 拦截器
// 3.请求拦截器
httpInstance.interceptors.request.use(config => {
    return config;
}, error => Promise.reject(error));
// 4.响应拦截器
httpInstance.interceptors.response.use(
    result => result.data,
    error => {
        return Promise.reject(error);
    }
);

export default httpInstance