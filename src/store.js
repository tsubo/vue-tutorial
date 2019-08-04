import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const counter = {
  namespaced: true, // モジュールの名前空間を有効にする

  state: {
    count: 0,
  },
  getters: {
    double(state) {
      return state.count * 2
    },
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    // 引数に ES2015 の引数分割束縛を使った例（context を省略できる）
    decrement({ commit }) {
      commit('decrement')
    },
  },
}

const todoList = {
  namespaced: true, // モジュールの名前空間を有効にする

  state: {
    todos: [],
  },
  getters: {
    todos(state) {
      return state.todos
    },
    nextId(state) {
      if (state.todos.length) {
        return Math.max(...state.todos.map(todo => todo.id)) + 1
      }
      return 1
    },
  },
  mutations: {
    todos(state, todos) {
      state.todos = todos
    },
    remove(state, idToRemove) {
      state.todos = state.todos.filter(todo => {
        return todo.id !== idToRemove
      })
    },
    add(state, todo) {
      state.todos.push(todo)
    },
  },
  actions: {
    getTodos({ commit }) {
      fetch('http://localhost:8080/todos.json')
        .then(response => response.json())
        .then(json => {
          console.log(json)
          commit('todos', json.todos)
        })
        .catch(error => console.error('Error:', error))
    },
    add({ commit, getters }, text) {
      const trimedText = text.trim()
      if (trimedText) {
        commit('add', {
          id: getters.nextId,
          text: trimedText,
        })
      }
    },
  },
}

export default new Vuex.Store({
  modules: {
    counter: counter,
    todoList: todoList,
  },
})
