<template>
  <input type="button" value="Search" v-on:click="submit" />
</template>

<script>
export default {
  name: "SearchButton",

  methods: {
    submit() {
      this.$emit("onSearchSubmit");
    }
  }
};
</script>

<style scoped lang="less"></style>
