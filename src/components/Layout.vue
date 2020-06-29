<template>
  <div class="layout">
    <div class="side-r-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layout'
  }
</script>
<style scoped>
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .side-r-wrap {
    margin-left: 0;
    flex: 1;
    height: 100%;
    background: url(../assets/images/common/page-bg.jpg) no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
  }

</style>
