import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'

import About from '@/components/sections/About'
import ApioLogo from '@/components/sections/ApioLogo'
import Box from '@/components/Box'
import Contacts from '@/components/sections/Contacts'
import Footer from '@/components/sections/Footer'
import NavBar from '@/components/sections/NavBar'
import Skills from '@/components/sections/Skills'
import Uvu from '@/components/sections/Uvu'
import Welcome from '@/components/sections/Welcome'
import router from '@/router'

Vue.use(Buefy)
Vue.config.productionTip = false

Vue.component('About', About)
Vue.component('ApioLogo', ApioLogo)
Vue.component('Box', Box)
Vue.component('Contacts', Contacts)
Vue.component('Footer', Footer)
Vue.component('NavBar', NavBar)
Vue.component('Skills', Skills)
Vue.component('Uvu', Uvu)
Vue.component('Welcome', Welcome)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
