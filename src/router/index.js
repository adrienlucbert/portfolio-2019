import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView'
import PortfolioView from '@/views/PortfolioView'
import Error404View from '@/views/404ErrorView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/portfolio/',
      name: 'Portfolio',
      component: PortfolioView
    },
    {
      path: '/*',
      name: '404 Error',
      component: Error404View
    }
  ]
})
