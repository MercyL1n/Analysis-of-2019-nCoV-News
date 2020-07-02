<template>
  <div class="top-mid">
    <div class="midTitle">{{title}}</div>
  </div>
</template>
<script>
  export default {
    name: 'topMid',
    data () {
      return {
        title: '疫情新闻采集分析系统'
      }
    }
  }
</script>
<style>
  .top-mid {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 1650px;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 24px 20px 0;
    background: url(../../assets/images/common/top-center-bg.png) no-repeat top center;
    background-size: 100% 100%;
    transform: translate(-50%, 0);
    margin-left: -20px;
  }
  .midTitle {
    font-size: 80px;
    color: #fdfeff;
    text-shadow: 0 0 5px #fbfbfb, 0 0 10px #fbfbfb, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 75px #228DFF;
  }
</style>
