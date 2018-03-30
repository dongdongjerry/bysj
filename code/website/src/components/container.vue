<template>
    <div>
      <topNav></topNav>
      <elements :show="true"></elements>
      <el-row>
        <el-col :span="24" class="row-c row2">
          <render :node="node"></render>
          </el-col>
      </el-row>
    </div>
</template>

<script>
  import topNav from './topNav'
  import elements from './elements'
  import preview from './preview'
  import render from './render'
  import { mapState, mapActions } from 'vuex'
  export default {
    name: "container",
    components: {
      topNav,
      elements,
      preview,
      render
    },
    data() {
      return {
        node: {
          type: 'site',
          name: 'lego site',
          children: [
            {
              type: 'preview',
              children: [
                {
                  type: 'paragraph',
                  title: '测试'
                }
              ]
            }
          ]
        }
      }
    },
    computed: {
      ...mapState(['site','currentPage','widgets'])
    }
  }
</script>

<style scoped lang="scss">
  .row-c{
    height: calc(100vh - 50px);
    &.row1{
      background-color: #ede7f6;
    }
    &.row2{
      background-color: #fff;
    }
    &.row3{
      background-color: #ede7f6;
    }
  }


</style>
