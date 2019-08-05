export default {
  todos(state) {
    return state.todos
  },
  nextId(state) {
    if (state.todos.length) {
      return Math.max(...state.todos.map(todo => todo.id)) + 1
    }
    return 1
  },
}
