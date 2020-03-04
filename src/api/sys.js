/**@description 系統獲取後台的token
 * @param code是Jession生成的隨機字符串
 * @param redirect是跳轉地址
*/
import config from '../config'
export const getAccessToken = {
  url:  "/auth/getAccessToken",
  method: "GET",
  params: {
    code: "",
    redirect: config.redirectUri
  }
};