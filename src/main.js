import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'vant/lib/index.css'
import 'amfe-flexible'

// 加载全局样式
import './style/index.less'
Vue.config.productionTip = false

Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
