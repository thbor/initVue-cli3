/**@description 系統獲取後台的token
 * @param code是Jession生成的隨機字符串
 * @param redirect是跳轉地址
*/
import config from '../config'
import axios from '../plugins/axios'
export const getAccessToken = {
  url:  "/auth/getAccessToken",
  method: "GET",
  params: {
    code: "",
    redirect_uri: config.redirectUri
  }
};
export const refresh = {
  url:  "/auth/getRefreshToken",
  method: "GET",
  params: {
    refreshToken: ""
  }
};

/**
 * @description 跳轉登錄頁面
 * 
*/
export const toLogin=()=>{
  window.location.href = config.loginUri;
}
/**
 * @desc 设置身份信息
 * @param {*} token AccessToken
 * @param {*} refresh RefreshToken
 */
export const setAuth = (token, refresh) => {
  window.sessionStorage.token = token;
  window.sessionStorage.refresh = refresh;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
/**
 * @desc 刷新AcessToken
 */
export const getRefresh = () => {
  let refreshToken = window.sessionStorage.refresh;
  if (!refreshToken) toLogin();
  refresh.params.refreshToken = refreshToken;
  return axios(refresh);
};
export const Test = {
  url:  "/Hello/getJson",
  method: "GET",
  params: {
  }
};