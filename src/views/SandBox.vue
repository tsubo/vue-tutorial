<template>
  <div class="sandbox">
    <!-- ここにこのコンポーネントの HTML を書きます -->
    <h1>SandBox</h1>

    <p>{{ msg }}</p>
    <p>{{ now() }}</p>
  </div>
</template>

<script>
// ここに JavaScript を書きます

// このコンポーネントで使用する Vue オブジェクト
export default {
  // データ
  data() {
    return {
      msg: "Hello, World!"
    };
  },

  // メソッド
  methods: {
    now() {
      return new Date();
    }
  }
};
</script>

<style>
/* ここに、このコンポーネントに適用する CSS を書きます */
.sandbox {
  color: red;
}
</style>
