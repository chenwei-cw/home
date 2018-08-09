import axios from 'axios'
import config from './config'

let cancel,promiseObj = {}
let instance = axios.create();

//请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

//响应拦截器即异常处理
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
//`baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// instance.defaults.baseURL = config.localURL;
//设置超时时间,如果请求话费了超过 `timeout` 的时间，请求将被中断
instance.defaults.timeout = 10000;

export default {
    get(url,params){
        return new Promise((resolve,reject)=>{
            instance({
                method:'get',
                url,
                params,

            }).then(res=>{
                resolve(res)
            },err=>{
                reject(err)
            })
        })
    },
    post(url,params){
        return new Promise((resolve,reject)=>{
            instance({
                method:'post',
                url,
                params,

            }).then(res=>{
                resolve(res)
            },err=>{
                reject(err)
            })
        })
    },
}