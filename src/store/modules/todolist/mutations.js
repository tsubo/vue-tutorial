export default {
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
}
