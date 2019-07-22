import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import {btnGroup} from '@/constant'

Vue.use(Router)

let routes:any = []
const getRoute = () => {
  btnGroup.forEach((item: any) => {
    let name  = `ts-0${item.path}`
    routes.push({
      path: `/${name}`,
      name: `${name}`,
      component: () => import(/* webpackChunkName: "about" */ `./views/${name}.vue`)
    }) 
  })
}
getRoute()

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    ...routes
  ]
})
