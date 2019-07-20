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
  computed: {
    ...mapState([
      "count" // this.count を this.$store.state.count にマップ
    ]),
    ...mapGetters([
      "double" // this.double を this.$store.state.getters.double にマップ
    ])
    /* DEL mapState, mapGetters で置き換え
    count() {
      // vuex 内の count ステートを参照
      return this.$store.state.count;
    },
    double() {
      // vuex 内の double ゲッターを参照
      return this.$store.getters.double;
    }
    */
  },
  methods: {
    ...mapActions([
      "increment", // this.increment() を this.$sotre.dispatch("increment") にマップ
      "decrement" // this.decrement() を this.$store.dispatch("decrement") にマップ
    ])
    /* DEL mapActions で置き換え
    increment() {
      // vuex 内の increment ミューテーションを実行
      // this.$store.commit("increment");

      // vuex 内の increment アクションを実行
      this.$store.dispatch("increment");
    },
    decrement() {
      // vuex 内の decrement ミューテーションを実行
      // this.$store.commit("decrement");

      // vuex 内の decrement アクションを実行
      this.$store.dispatch("decrement");
    }
    */
  }
};
</script>
