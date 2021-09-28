import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import VueParticles from 'vue-particles'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(VueParticles)

import '@/permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
