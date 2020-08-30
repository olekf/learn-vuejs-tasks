<template>
  <div>
    <div>{{ item.movieName }}</div>
    <img :src="item.imageUrl" />
    <div>{{ item.gengre }}</div>
    <div>{{ item.year }}</div>
  </div>
</template>

<script>
export default {
  name: "GridItem",

  props: {
    item: Object
  }
};
</script>

<style scoped lang="less"></style>
