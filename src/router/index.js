import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import UiButton from '@/components/UiButton'
import UiTabs from '@/components/UiTabs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/ui-button',
      name: 'ui-button',
      component: UiButton
    },
    {
      path: '/ui-tabs',
      name: 'ui-tabs',
      component: UiTabs
    }
  ]
})
