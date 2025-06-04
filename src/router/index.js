import { createRouter, createWebHistory } from 'vue-router'
import Registro from '../views/Registro.vue'
import Login from '../views/Login.vue'
import Chat from '../views/Chat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path: '/', name: 'Registro', component: Registro },
  { path: '/login', name: 'Login', component: Login },
  { path: '/chat', name: 'Chat', component: Chat },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
  ],
})


export default router


//  { path: '/', redirect: '/registro' },
//   { path: '/registro', component: Registro },
//   { path: '/login', component: Login },
//   { path: '/chat', component: Chat }