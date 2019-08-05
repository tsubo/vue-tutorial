import Vue from 'vue'
import Vuex from 'vuex'
import counter from './store/modules/counter'
import todoList from './store/modules/todolist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: counter,
    todoList: todoList,
  },
})
