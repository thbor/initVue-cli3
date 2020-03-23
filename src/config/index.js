import development from "./development"
const config={
  model:process.env.NODE_ENV,
  routeModel:"history",
  postContentType: "application/json",
  portaitPath: "http://10.244.168.180/humattend/emp/queryPhotoByEmpNo?empNo="
}
//將引入的develop.js的文件放在config裡面
const configs = development;
for(const key of Object.keys(configs)){config[key] = configs[key]}
export default config;