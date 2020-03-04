import axios from 'axios'
import config from '../config/'
axios.defaults.baseURL =config.apiUri
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = config.postContentType;
console.log("axios",config.apiUri)
export default axios;