import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Level1 from './views/Level1.vue'
import Level2 from './views/Level2.vue'
import Level3 from './views/Level3.vue'
import Finish from './views/Finish.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component : Home
    },
    {
      path: '/level1',
      name: 'level1',
      component : Level1
    },
    {
      path: '/level2',
      name: 'level2',
      component : Level2
    },
    {
      path: '/level3',
      name: 'level3',
      component : Level3
    },
    {
      path: '/finish',
      name: 'finish',
      component : Finish
    },
    {
      path: '/admin',
      name: 'admin',
      component : Admin
    }
  ]
})
