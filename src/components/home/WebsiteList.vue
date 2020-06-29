<template>
    <div class="websiteList">
      <h2 class="chart-title">网站列表</h2>
      <div class="list">
        <ul>
        <li v-for="item in list" :key="item.name">
          {{item.name}}:
          <a :href="item.url">{{item.url}}</a>
        </li>
      </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'websiteList',
  data () {
    return {
      list: [
        {name: '网易新闻', url: 'https://news.163.com/'},
        {name: '新浪新闻', url: 'https://news.sina.com.cn/'},
        {name: '环球网', url: 'https://www.huanqiu.com/'},
        {name: '新华网', url: 'http://www.xinhuanet.com/'},
        {name: '凤凰网', url: 'http://www.ifeng.com/'}
      ]
    }
  }
}
</script>

<style>
  .websiteList {
    position: absolute;
    top: 55%;
    right: 70px;
    width: 35%;
    height: 690px;
    background: url(../../assets/images/common/tip-title-bg.png) no-repeat top left;
  }
  .websiteList ul {
    position: relative;
    top: 90px;
    font-size: 40px;
    color: #FFF;
  }
  .websiteList ul li a{
    color: #FFF;
  }
</style>