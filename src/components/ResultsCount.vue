<template>
  <p>{{ value }} movie found</p>
</template>

<script>
export default {
  name: "ResultsCount",

  props: {
    value: Number
  }
};
</script>

<style scoped lang="less"></style>
