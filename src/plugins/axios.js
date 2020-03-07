import axios from 'axios'
import config from '../config/'
import jwt from "jwt-decode";
import {setAuth,getRefresh} from '../api/sys'
axios.defaults.baseURL =config.apiUri
axios.defaults.headers.post['Content-Type'] = config.postContentType;

/**
 * @desc 处理请求，验证AccessToken
 * @param config
 * @returns {Promise<never>|*}
 */
const checkAuth = async config => {
  let token = config.headers.common.Authorization;
  let now = new Date().valueOf();
  if (!token || !token.split(" ")[1]) return config;
  token = token.split(" ")[1];
  token = jwt(token);
  if (token.exp && now < token.exp * 1000) return config;
  delete axios.defaults.headers.common.Authorization;
  let data = await getRefresh();
  let accessToken = data["access_token"];
  if (accessToken) {
    setAuth(accessToken, data["refresh_token"]);
    config.headers.common.Authorization = "Bearer " + accessToken;
    return config;
  } else {
    return Promise.reject("刷新token失败!");
  }
};
/**
 * @desc 设置异常
 * @param {Object} response
 */
const setErr = response => {
  response.data.data = response.config;
  return reject(response.data);
};
/**
 * @desc 处理正确返回值
 * @param {Object} response
 * @returns {Object} 如果返回值正常，则返回数据内容，否则抛出异常
 */
const resolve = response => {
  let data = response.data;
  let code = parseInt(data.code);
  let isOk = code === 200 || code === "200";
  if (isOk) return data.data;
  if (!isOk && data.msg) return setErr(response);
  return data;
};
/**
 * @desc 异常处理
 */
const reject = error => {
  config.model === "development" && window.console.log(error);
  if (error.msg) return Promise.reject(error.msg);
  return Promise.reject("网络异常!");
};

axios.interceptors.request.use(
  config => checkAuth(config),
  error => Promise.reject(error)
);
axios.interceptors.response.use(resolve, reject);

export default axios;