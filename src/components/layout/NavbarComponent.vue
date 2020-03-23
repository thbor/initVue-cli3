<template>
  <div>
    <div class="float-left text-center menu-btn" >
      <!-- <i class="el-icon-s-fold" style="font-size: 24px;"></i> -->
    </div>
    <div class="float-right">
      <el-dropdown @command="onSelect">
        <span class="el-dropdown-link" >
          <div class="float-left cirle el-dropdown-link" style="overflow: hidden;">
            <img :src="config.portaitPath + $store.state.userinfo.sub"/>
          </div>
          <span class="el-dropdown-link link text-light">
            {{ $store.state.userinfo.sub }}
          </span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">
            退出登錄
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { logout } from "../../api/sys";
import config from "../../config";

export default {
 
  data() {
    return {
      config
    }
  },
  mounted(){
  },
  methods: {
    onSelect: function(value) {
      if (value === "logout") logout();
    },

  }
};
</script>

<style lang="css" scoped>
.menu-btn {
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  width: 58px;
  cursor: pointer;
}
.cirle {
  border-radius: 50%;
  background: #fff;
  width: 30px;
  height: 30px;
  margin-top: 13px;
  margin-right: 10px;
  text-align: center;
  line-height: 30px;
  position: relative;
  cursor: pointer;
}
.cirle img {
  width: 100%;
}

.a-link {
  color: #fff;
  text-decoration: none;
}
.a-link:hover {
  text-decoration: underline;
}

</style>
