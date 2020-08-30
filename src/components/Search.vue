<template>
  <input type="text" :value="value" v-on:keyup.enter="submit" />
</template>

<script>
export default {
  name: "Search",

  props: {
    value: String
  },

  methods: {
    submit() {
      this.$emit("onSearchSubmit");
    }
  }
};
</script>

<style scoped lang="less"></style>
