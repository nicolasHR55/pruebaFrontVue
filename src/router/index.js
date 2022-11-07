import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './../views/HomeView.vue'
import ContactoView from './../views/ContactoView.vue'
import VerProducto from './../views/VerProducto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path: '/producto/:id',
    name: 'VerProducto',
    component: VerProducto
  },
  
  
  
]

const router = new VueRouter({
  routes
})

export default router
