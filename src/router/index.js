import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ResumePage from '@/pages/ResumePage'
import ProjectsPage from '@/pages/ProjectsPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/resume',
      name: 'ResumePage',
      component: ResumePage
    },
    {
      path: '/projects',
      name: 'ProjectsPage',
      component: ProjectsPage
    }
  ]
})

export default router
