import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import axios from 'axios'
// import obj2FormData from './utils/obj2FormData'

import './common'

Vue.config.productionTip = false
Vue.prototype.$http = axios

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios.interceptors.request.use(function (config) {
//   // if (!config.headers.Authorization && token) config.headers.Authorization = `Bearer ${token}`
//   if (config.method === 'post') config.data = obj2FormData(config.data)
//   return config
// })

axios.interceptors.response.use(function (response) {
  if (response.data && (response.data.code === '0000')) {
    return response.data.result
  } else {
    app.$toast(response.data.message || response)
    return Promise.reject(response.data || response)
  }
}, function (error) {
  app.$toast(error.message)
  return Promise.reject(error)
})
