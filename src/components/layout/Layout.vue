<template>
     <el-container style="height: 100vh;">
    <Aside :menuCollapse="asideCollapse" @select="onSelect" :screenWidth="screenWidth"/>
    <el-container>
      <el-header >
        <Navbar @changeCollapse="asideCollapse = !asideCollapse" />
        <!-- <i class="el-icon-s-unfold unfold" v-if="!ifPc()" @click="showMenu"></i> -->
      </el-header>
      <el-main>
        <div class="main">
          <router-view  :screenHeight="screenHeight"/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import config from '../../config';


import {getAccessToken,setAuth,getUserInfo,CurrentInfo,UserRoleList} from '../../api/sys';
import axios from '../../plugins/axios'
import Navbar from './NavbarComponent'
import Aside from './AsideComponent'
export default {
  components: {
    Navbar,
    Aside,
    
  },
  data(){
    return{
      asideCollapse: false,
      navList:[],
      device:"Window",
      //当前设备，默认为Window，打开页面是判断是否为ipad，如果是ipad则不显示左边菜单栏
      screenWidth: document.body.clientWidth,//屏幕宽度
      screenHeight:document.body.clientHeight,
    }
  },
  watch:{
    device:function() {
      this.getWindowInfo();
    },
    screenWidth:function(val){ //监听屏幕宽度变化
    this.screenWidth = val;
    },
    screenHeight:function(val){ //监听屏幕宽度变化
    this.screenHeight = val;
    console.log(this.screenHeight)
    }
  },
  mounted(){
    this.resizeScreen();
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
      this.getUser();
    }
    else{
      this.toLogin();
    }
    this.ifPc();
    this.getWindowInfo();

  },
  methods:{
    resizeScreen(){
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
          window.screenHeight = document.body.clientHeight
          that.screenHeight = window.screenHeight
        })()
      }
    },
    ifPc(){
      if(this.$store.state.screen.device=="Window"){
        return true
      }else{
        return false
      }
    },
    getWindowInfo(){
      this.device = this.$store.state.screen.device;
    },
 
    showMenu() {
      //TODO 伸展菜单
    },
    toLogin(){
      window.location.href = config.loginUri;
    },
    onGetTokens(data){
      setAuth(data["access_token"], data["refresh_token"]);
      this.$router.push("/");
      this.getUser();
    },
    onSelect: function(values) {
      this.navList = values;
    },
    getUser: function() {
      axios(getUserInfo).then(user => {
        this.onGetUserInfo(user);
      });
    },
    onGetUserInfo: function(user) {
      this.$store.commit("setUser", user);
      CurrentInfo.params.userId = user.sub;
      axios(CurrentInfo).then(data => this.onGetUserDetail(data));
      UserRoleList.params.userNo = user.sub;
      axios(UserRoleList).then(data => this.onGetUserRole(data));
    },
    onGetUserDetail: function(info) {
      if (info) {
        this.$store.commit("setUserDetial", info);
      }
    },
    onGetUserRole: function(data) {
      this.$store.commit("setRole", data);
    },
  },
  
}
</script>
<style lang="css" scoped>
.el-header {
  background-color: #B3C0D1;
  color: #FEFFFF;
  background: #3D6096;
  height: 5%;
  line-height: 60px;
  padding: 0;
  padding-right: 30px;
}
.nav {
  border-bottom: 1px solid #D7D7D7;
  padding: 12px 19px;
  color: #D7D7D7;
}
.el-main {
  padding: 0;
  background: #D5DFEB;
}
.main {
  padding: 12px 19px;
  /* padding-left:(20/16)+rem; 
  padding-top:(22/16)+rem; 
  padding-bottom:(9/16)+rem;  */
}
.nav-item {
  cursor: pointer;
  /* font-size: 14px; */
}
.unfold{
  color: white;
  font-size:40px !important;
  margin-top:10px;  
}

</style>