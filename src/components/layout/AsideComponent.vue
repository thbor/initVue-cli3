<template>
  <el-aside :style="getWidth()">
    <div class="brand">
      {{ title }}
    </div>
     <!-- :collapse="menuCollapse" -->
    <el-menu
      background-color="#FFFFFF"
      text-color="#505155"
      active-text-color="#505155"
      :unique-opened="true"
      :collapse-transition="false"
      default-active="1"
      class="el-menu-aside"
      :router="true"
    >
       <el-menu-item :index="item.path" v-for="item in menus" :key="item.id">
        <template slot="title">
          <img :src="require('../../../public/image/'+item.image+'.png')" class="mr">
          <span>{{ item.title }}</span>
        </template>
       </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import menus from "../../config/menus";

export default {
  props:{
    screenWidth:Number
  },
  data() {
    return {
      title: "仓库管理系统",
      width: "",
    };
  },
  computed: {
    menus: function() {
      if (this.$store.state.userinfo.isAdmin) return menus;
      return menus.filter(item => {
        return this.checkMunu(item);
      });
    }
  },
  watch:{
    screenWidth:function () {
      this.resizeWindow();
    }
  },
  mounted() {
    this.resizeWindow()
  },
  methods: {
    checkMunu: function(item) {
      let shouldShow = !!this.$store.state.userinfo.roleList.find(role => {
        return role.powerId === item.powerId;
      });
      return item.powerId === 0 || shouldShow;
    },
    resizeWindow(){
      this.width = (this.screenWidth/1920)*250+"px";
      if(this.width.split("px")[0]<130){
        this.title="WMS"
        this.width = "130px"
      }
      else{
        if(this.width.split("px")[0]>250){
          this.width = "250px"
        }
          this.title="仓库管理系统"
      }
    },
    getWidth(){
      return{
        width:this.width,
        fontSize:"12px !imporant"
      }
    },
   
  }
};
</script>

<style lang="scss" scoped>
.brand {
  height: 60px;
  line-height: 60px;
  font-size: 24px !important; 
  background: #51A7FC;
  color: #FEFFFF;
  text-align: center;
  width: 100%;
}
.el-menu-aside {
  border: 1px solid #FFFFFF;
  color: #505155;
  text-align: center;
   margin-top: 20px;
}
.el-aside {
  height: 100vh;
  background: #FFFFFF;
  overflow-x: hidden;
  overflow-y: auto;
}
.el-submenu__title i{
  color: black !important
}
.el-menu-item.is-active {
   background-color: #EDF0F4 !important;
}

.el-menu-item:hover{
    background: #EDF0F4 !important;
}
.mr{
  margin-right:1rem
}
img{
  
}
</style>
