<template>
  <div class="nav">
    <div class="button-list">
      <el-button type="info"><i class="el-icon-view"></i>&nbsp;预览</el-button>
      <el-button type="info"><i class="el-icon-document"></i>&nbsp;保存</el-button>
      <el-button type="info"><i class="el-icon-share"></i>&nbsp;分享</el-button>
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
    background: #333333;
    .button-list{
      float: right;
      padding-right: 10px;
      line-height: 50px;
    }
  }

</style>
