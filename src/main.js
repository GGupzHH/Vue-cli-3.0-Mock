import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Http from './Http/http'
import './mock.js'
Vue.config.productionTip = false
Vue.use(Http)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
