import Vue from 'vue';
import axios from 'axios';
import { Toast } from 'vant';
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = (msg) => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true,
  });
};

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status) => {
  // 状态码判断
  switch (status) {
    case 401:
      tip('未登录状态，跳转登录页');
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      break;
    // 404请求不存在
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      tip('未知错误');
  }
};

const httpConfig = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const http = axios.create(httpConfig);

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
http.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

// 响应拦截器
http.interceptors.response.use(
  // 请求成功
  (res) => {
    // (res.status === 200 ? Promise.resolve(res) : Promise.reject(res))
    if (res.status === 200) {
      return Promise.resolve(res);
    }
    // 请求已发出，但是不在2xx的范围
    errorHandle(res.status);
    return Promise.reject(res);
  },


  error => Promise.reject(error),
);

Plugin.install = function () {
  Vue.axios = http;
  window.axios = http;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return http;
      },
    },
    $axios: {
      get() {
        return http;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
