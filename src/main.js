import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'

import LandingPage from '@/components/sections/LandingPage'
import ExerciseTable from '@/components/sections/ExerciseTable'
import router from '@/router'

Vue.use(Buefy)
Vue.config.productionTip = false

Vue.component('LandingPage', LandingPage)
Vue.component('ExerciseTable', ExerciseTable)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
