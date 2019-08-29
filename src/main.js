import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'

import About from '@/components/sections/About'
import NavBar from '@/components/sections/NavBar'
import ExerciseTable from '@/components/sections/ExerciseTable'
import router from '@/router'

Vue.use(Buefy)
Vue.config.productionTip = false

Vue.component('About', About)
Vue.component('NavBar', NavBar)
Vue.component('ExerciseTable', ExerciseTable)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
