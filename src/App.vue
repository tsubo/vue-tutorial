<template>
  <div id="app">
    <div id="nav">
      <!-- Vue Router を使ってページ遷移するための router-link タグです -->
      <router-link to="/">Home</router-link> |
      <!-- "/sandbox" へのリンクを追加 -->
      <router-link to="/sandbox">Sandbox</router-link> |
      <router-link to="/todolist">Todo List</router-link> |
      <router-link to="/counter">Counter</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <!-- Vue Router で遷移したページが router-view に表示されます -->
    <router-view />
  </div>
</template>

<style>
/* ここに、このコンポーネントに適用する CSS を書きます */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
