import Vue from 'vue'

const state = {}

const mutations = {
  SET_ACCOUNT (state, accountObj) {
    if (typeof userinfo !== 'object') return
    for (let key in accountObj) {
      Vue.set(state, key, accountObj[key])
    }
  },
  LOGIN (state, userinfo) {
    if (typeof userinfo !== 'object') return
    for (let key in userinfo) {
      Vue.set(state, key, userinfo[key])
    }
  },
  LOGOUT (state) {
    for (let key in state) state[key] = ''
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
