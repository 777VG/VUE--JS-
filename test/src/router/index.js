import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=> import("@/views/indexPage.vue")
  },
  {
    path:'/home',
    name:'home',
    component:()=>import("@/views/HomeView.vue")
  },
  {
    path:'/page',
    name:'page',
    component:()=>import("@/views/pagination.vue")
  }
  
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
