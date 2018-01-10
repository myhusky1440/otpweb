import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import totp from '../components/totp/totp.vue'
import hotp from '../components/hotp/hotp.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path: '/',
          component: totp
        },
        {
          path: 'totp',
          component: totp
        },
        {
          path: 'hotp',
          component: hotp
        },
      ]
    },
  ]
})
