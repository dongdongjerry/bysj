import Vue from 'vue'
import Router from 'vue-router'
import  drag from '@/components/drag'
import  element from '@/components/element'
import  container from '@/components/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag
    },
    {
      path: '/element',
      name: 'element',
      component: element
    }
  ]
})
