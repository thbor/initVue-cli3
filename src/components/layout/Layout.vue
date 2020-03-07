<template>
   <div></div>
</template>

<script>
import config from '../../config';
import {getAccessToken,setAuth,Test} from '../../api/sys';
import axios from '../../plugins/axios'
export default {
  components: {
  },
  data(){
    return{

    }
  },
  mounted(){
    this.test()
    //這裡會一直向服務器請求拿到jession，所以需要在後台獲取token併將這個臨時token放在application的token裡面，如果有這個token則默認爲登錄，沒有才登錄
    let code = this.$route.query.code;
    if(code){
      getAccessToken.params.code = code;
      axios(getAccessToken).then(data=>{
        this.onGetTokens(data)
      })
    }
    else if (window.sessionStorage.token && window.sessionStorage.refresh) {
      setAuth(window.sessionStorage.token, window.sessionStorage.refresh);
      // this.getUser();
    }
    else{
      this.toLogin();
    }

  },
  methods:{
    toLogin(){
      window.location.href = config.loginUri;
    },
    test(){
      axios(Test).then(data=>{
        window.console.log("test",data)
      })
    },
    onGetTokens(data){
      var data2 = JSON.parse(data);
      setAuth(data2["access_token"], data2["refresh_token"]);
      this.$router.push("/");
    }
  },
  
}
</script>
