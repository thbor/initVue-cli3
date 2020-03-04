<template>
  <div>
    2
  </div>
</template>

<script>
import config from '../config';
import {getAccessToken} from '../api/sys';
import axios from '../plugins/axios'
// import axios from "axios"
export default {
  components: {
  },
  data(){
    return{

    }
  },
  mounted(){
    //這裡會一直向服務器請求拿到jession，所以需要在後台獲取token併將這個臨時token放在application的token裡面，如果有這個token則默認爲登錄，沒有才登錄
    let code = this.$route.query.code;
    if(code){
      getAccessToken.params.code = code;
      console.log("配置",getAccessToken)
      axios(getAccessToken).then(data=>{
        console.log("data",data)
      })
    }else{
      this.toLogin();
    }

  },
  methods:{
    toLogin(){
      window.location.href = config.loginUri;
    },
  },
  
}
</script>
