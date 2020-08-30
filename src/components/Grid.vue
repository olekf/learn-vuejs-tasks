<template>
  <div>
    <div
      v-for="(items, index) in this.chunkedItems"
      v-bind:key="index"
      class="line"
    >
      <div v-for="(item, index) in items" v-bind:key="index" class="item">
        <gridItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import chunk from "chunk";
import GridItem from "./GridItem";

export default {
  name: "Grid",

  components: {
    gridItem: GridItem
  },

  props: {
    items: Array
  },

  computed: {
    chunkedItems() {
      return chunk(this.items, 3);
    }
  }
};
</script>

<style scoped lang="less"></style>
