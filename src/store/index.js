import Vue from 'vue'
import Vuex from 'vuex'

import loginInfo from './modules/loginInfo'
import permission from './modules/permission'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    permissionRoutes: state => state.permission.routes
  },
  modules: {
    loginInfo,
    permission
  }
})
