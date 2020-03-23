import Vue from 'vue'
import Vuex from 'vuex'
import userinfo from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userinfo,
    screen
  }
})
