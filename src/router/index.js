import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import QuestionList from '../views/QuestionList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component:Detail
  },
  {
    path: '/questionList',
    name: 'QuestionList',
    component: QuestionList
  }
]

const router = new VueRouter({
  routes
})

export default router
