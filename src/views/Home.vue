<template>
  <!-- ここにコンポーネントの HTML を記述します -->
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <!-- 自分で作成したコンポーネントのタグを使用することができます -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

// ここに JavaScript で Vueオブジェクトを定義します
export default {
  name: "home",
  components: {
    HelloWorld // 自分が作成した HelloWorld を使用する
  }
};
</script>
