import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import UiButton from '@/components/UiButton'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1',
      name: 'index',
      component: Index
    },
    {
      path: '/2-1',
      name: 'ui-button',
      component: UiButton
    }
  ]
})
