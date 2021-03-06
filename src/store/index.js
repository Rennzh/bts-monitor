import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    user: {
      name:''
    },
  },
  getters: {
    user: state => state.user,
  },
  actions,
  mutations,
  modules: {
  },
  strict: debug,
})
