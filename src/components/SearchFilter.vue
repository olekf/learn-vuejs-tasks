<template>
  <div>
    <p>Search by</p>
    <label :for="inputId('title')">Title</label>
    <input
      type="radio"
      :name="name"
      :id="inputId('title')"
      value="title"
      v-model="value"
    />
    <label :for="inputId('gengre')">Gengre</label>
    <input
      type="radio"
      :name="name"
      :id="inputId('gengre')"
      value="gengre"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "SearchFilter",

  props: {
    name: {
      type: String,
      default: "searchFilter"
    },
    value: {
      type: String,
      default: "title"
    }
  },

  methods: {
    inputId(radioName) {
      return this.name + "-" + radioName;
    }
  }
};
</script>

<style scoped lang="less"></style>
