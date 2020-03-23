/**@description 系統獲取後台的token
 * @param code是Jession生成的隨機字符串
 * @param redirect是跳轉地址
*/
import config from '../config'
import axios from '../plugins/axios'

const ip = config.authServer
export const getAccessToken = {
  url:  ip+"/auth/getAccessToken",
  method: "GET",
  params: {
    code: "",
    // redirect_uri: config.redirectUri
    redirect:config.redirectUri
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
 * @desc 获取用户信息
 */
export const getUserInfo = {
  url: ip+"/auth/getUserInfo",
  method: "GET",
  params: {}
};
/**
 * @desc 获取用户详细信息
 * @param userId 工号
 */
export const CurrentInfo = {
  url: "/userAndPermit/getCurrentUserInfo",
  method: "GET",
  params: {
    userId: ""
  }
};
/**
 * @desc 查詢用戶權限
 * @param {String} userNo 用戶ID
 * @param {Number} isvalid 0 沒有權限,1 表示有權限,不傳查詢全部
 */
export const UserRoleList = {
  url: "/userPower/queryUserPowerInfoByUserDTO",
  method: "GET",
  params: {
    userNo: "",
    isvalid: 1
  }
};
export const Test = {
  url:  "/Hello/getJson",
  method: "GET",
  params: {
  }
};
/**
 * @description 退出登录
 */
export const logout = () => {
  window.sessionStorage.clear();
  window.location.href = config.loginOutUri;
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