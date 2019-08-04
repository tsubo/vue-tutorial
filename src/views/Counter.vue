<template>
  <div class="counter">
    <h1>Counter</h1>
    <p>count: {{ count }}</p>
    <p>double: {{ double }}</p>
    <div>
      <button
        class="btn btn-sm btn-primary"
        @click="increment"
      >+</button>
      <button
        class="ml-1 btn btn-sm btn-secondary"
        @click="decrement"
      >-</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"; // ステートのヘルパーをインポート
import { mapGetters } from "vuex"; // ゲッターのヘルパーをインポート
import { mapActions } from "vuex"; // アクションのヘルパーをインポート

export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  computed: {
    // counter モジュールの state を参照する
    ...mapState({
      count: state => state.counter.count
    }),
    // counter モジュールの getter を名前空間を使用して参照する
    ...mapGetters({
      double: "counter/double"
    })
  },
  methods: {
    // counter モジュールの action を名前空間を使用して参照する
    ...mapActions({
      increment: "counter/increment",
      decrement: "counter/decrement"
    })
  }
};
</script>
