import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sandbox from './views/SandBox.vue'
import TodoList from './views/TodoList.vue'
import Counter from './views/Counter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // path と vue コンポーネント（ページ）を関連付けます
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 下記の様に書くことでコンポーネントの遅延ロードが可能です
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: Sandbox,
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList,
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    }
  ],
})
