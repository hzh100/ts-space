import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersist from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new vuexPersist({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    name: 'hello world',
    age: 0
  },
  mutations: {
    set_name(state, option) {
      state.name = option
    },
    set_age(state, option) {
      state.age = option
    }
  },
  actions: {
    loger({state, commit}, data) {
      console.log('================')
    }
  },
  getters: {
    name: state => state.name,
    age: state => state.age
  },
  // plugins: [vuexLocal.plugin]
})
