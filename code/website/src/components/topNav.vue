<template>
  <div class="nav">
    <div class="button-list">
      <el-button type="info" size="small" icon="el-icon-view">预览</el-button>
      <el-button type="info" size="small" icon="el-icon-document">保存</el-button>
      <el-button type="info" size="small" icon="el-icon-share">分享</el-button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "topNav"
    }
</script>

<style lang="scss" scoped>
  .nav {
    height: 50px;
    width: 100%;
    background: #353535;
    .button-list{
      float: right;
      padding-right: 10px;
      line-height: 50px;
    }
  }

</style>
