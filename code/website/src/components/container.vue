<template>
    <div>
      <topNav></topNav>
      <elements :show="true"></elements>
      <!--<el-row>
        <el-col :span="5" class="row-c row1"></el-col>
        <el-col :span="14" class="row-c row2"><preview></preview></el-col>
        <el-col :span="5" class="row-c row3"><div class="grid-content bg-purple"></div></el-col>
      </el-row>-->
    </div>
</template>

<script>
  import topNav from './topNav'
  import elements from './elements'
  import preview from './preview'
  export default {
    name: "container",
    components: {
      topNav,
      elements,
      preview
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
