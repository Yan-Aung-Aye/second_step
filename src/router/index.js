import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Twolive.vue'
import Livechat from "../views/Livechat.vue"
import Football from "../views/Football.vue"
import Highlights from "../views/Highlights.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/livechat",
    name: "Livechat",
    component: Livechat
  },
  {
    path: "/football",
    name: "Football",
    component: Football
  },
  {
    path: "/highlights",
    name: "Highlights",
    component: Highlights
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
