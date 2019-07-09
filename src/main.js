// 入口文件

import Vue from 'vue'
import App from './App.vue'




//引入css基础设置，yo文件
import './assets/styles/reset.styl'

import './filters/img-replace'

import './assets/swiper/css/swiper.min.css'

//控制台提示信息
Vue.config.productionTip = false


//路由模板入口
new Vue({
  render: h => h(App)
}).$mount('#app')

