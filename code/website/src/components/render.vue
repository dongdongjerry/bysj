<template>
  <component :is="node.type" :node="node" >
    <render v-for="child in node.children" :key="child.id" :node="child"/>
  </component>
</template>

<script>
  // 导入JSON 树中所涉及的所有节点
  import preview from './preview.vue'
  import paragraph from './widgets/paragraphs.vue'
  import page from './widgets/page.vue'

  export default {
    name: 'render',
    props: ['node'],
    components: {
      page,
      preview,
      paragraph
    }
  }
</script>
