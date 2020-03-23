export default {
  state: {
    username: "",
    sub: "",
    isvalid: 0,
    factoryno: "",
    punit: "",
    tel: "",
    userExpcode: "",
    isAdmin: false,
    roleList: []
  },
  mutations: {
    setUser: function(state, userinfo) {
      state.username = userinfo.preferred_username;
      state.sub = userinfo.sub;
    },
    setUserDetial: function(state, info) {
      state.isvalid = info.isvalid;
      state.factoryno = info.factoryno;
      state.punit = info.punit;
      state.tel = info.tel;
      state.userExpcode = info.userExpcode;
    },
    setRole: function(state, roleList) {
      state.roleList = roleList;
      state.isAdmin = roleList.some(item => item.powerId === 1);
    }
  }
};
