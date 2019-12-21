import Vue from 'vue'
import App from './App.vue'
import router from  './router/index'
import axios from 'axios'
// 将vue和axios 关联
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import WXJsSdk from 'weixin-js-sdk'
import './assets/css/base.css'
import './assets/css/common.css'

Vue.config.productionTip = false

// 挂载
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(WXJsSdk)

// axios 请求拦截器
axios.interceptors.request.use(function(request) {
  // loading、请求地址替换、修改
  return request
})
// 对返回结果进行拦截 {code:0,data:'',message:''}
axios.interceptors.response.use(function(response) {
  let res = response.data
  if(res.code !== 0) {
    alert(res.message)
  }
  return response
}, function(error){ // 网络错误
  return Promise.reject(error) // 捕获错误
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
