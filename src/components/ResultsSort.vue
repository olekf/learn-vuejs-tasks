<template>
  <div>
    <p>Sort by</p>
    <label :for="inputId('releaseDate')">Release date</label>
    <input
      type="radio"
      :name="name"
      :id="inputId('releaseDate')"
      value="releaseDate"
      v-model="value"
    />
    <label :for="inputId('rating')">Rating</label>
    <input
      type="radio"
      :name="name"
      :id="inputId('rating')"
      value="rating"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "ResultsSort",

  props: {
    name: {
      type: String,
      default: "resultsSort"
    },
    value: String
  },

  methods: {
    inputId(radioName) {
      return this.name + "-" + radioName;
    }
  }
};
</script>

<style scoped lang="less"></style>
