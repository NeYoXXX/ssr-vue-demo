<template>
  <div>
    <h1>home</h1>
    <h2>{{ item }}</h2>
    <button v-on:click="test">123</button>
  </div>
</template>

<script>
export default {
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    console.log(0);
    return store.dispatch("fetchItem");
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {
      return this.$store.state.items;
    },
  },
  methods: {
    test() {
      console.log(123);
    },
  },
};
</script>

<style>
</style>