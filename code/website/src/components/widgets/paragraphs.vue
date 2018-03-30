<template>
  <div class="paragraph">
    <p>{{node.title}}</p>
  </div>
</template>

<script>
  export default {
    name: 'paragraph',
    props: ['node', 'themeColor']
  }
</script>

<style scoped>
  .paragraph {
    cursor: move;
  }
  .paragraph:hover {
    background: red;
  }
</style>

