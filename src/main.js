import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'

import About from '@/components/sections/About'
import Box from '@/components/Box'
import NavBar from '@/components/sections/NavBar'
import Welcome from '@/components/sections/Welcome'
import router from '@/router'

Vue.use(Buefy)
Vue.config.productionTip = false

Vue.component('About', About)
Vue.component('Box', Box)
Vue.component('NavBar', NavBar)
Vue.component('Welcome', Welcome)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
