import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入二维码库  
import QR from "./common/js/wxqrcode.js" // 二维码生成器
Vue.prototype.$QR = QR;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
