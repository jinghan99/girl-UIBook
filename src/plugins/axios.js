import Axios from 'axios';
import Qs from 'qs';
import { Toast } from 'vant';

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
      tip('连接失败');
  }
};

const httpConfig = {
  baseURL: 'http://192.168.31.57:9002',
  timeout: 1000 * 12,
  withCredentials: false,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*', // 指定允许其他域名访问
  },
};

const http = Axios.create(httpConfig);

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
    if (res.status === 200) {
      return Promise.resolve(res);
    }
    // 请求已发出，但是不在2xx的范围
    errorHandle(res.status);
    return Promise.reject(res);
  },


  (error) => {
    if (error) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(error.status);
    }
    return Promise.reject(error);
  },
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    http.get(url, {
      params,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 * post方法必须要使用对提交从参数对象进行序列化的操作
 * qs模块来序列化我们的参数
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    http.post(url, Qs.stringify(data))
      .then((response) => {
        resolve(response.data);
      }, (err) => {
        reject(err);
      });
  });
}
