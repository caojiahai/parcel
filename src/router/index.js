import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld =  () => import('../components/HelloWorld.vue')
const Demo =  () => import('../components/Demo.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
