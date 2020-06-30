<template>
    <div class="websiteList">
      <h2 class="chart-title">网站列表</h2>
    <div class="websiteLabel">
      <el-table
        :data="list"
        style="width: 100%"
        height="690"
        :header-row-style="{height:'100px'}"
        :row-style="{height:'100px'}"
        header-row-class-name="tableHeader"
        row-class-name="tableRow">
        <el-table-column
          prop="name"
          label="名称"
          width="350"
          align="center">
        </el-table-column>
        <el-table-column
          prop="url"
          label="链接"
          width="700"
          align="center">
          <template slot-scope="scope">
            <a :href="scope.row.url"
              target="_blank"
              class="urlText">{{scope.row.url}}</a>
          </template>
        </el-table-column>
        
      </el-table>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {name: '网易新闻', url: 'https://news.163.com/'},
        {name: '新浪新闻', url: 'https://news.sina.com.cn/'},
        {name: '环球网', url: 'https://www.huanqiu.com/'},
        {name: '新华网', url: 'http://www.xinhuanet.com/'},
        {name: '凤凰网', url: 'http://www.ifeng.com/'},
        {name: '网易新闻', url: 'https://news.163.com/'},
        {name: '新浪新闻', url: 'https://news.sina.com.cn/'},
        {name: '环球网', url: 'https://www.huanqiu.com/'},
        {name: '新华网', url: 'http://www.xinhuanet.com/'},
        {name: '凤凰网', url: 'http://www.ifeng.com/'},
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
    height:1000px;
    background: url(../../assets/images/common/tip-title-bg.png) no-repeat top left;
  }
  .websiteLabel {
    margin-top: 90px;
    height: 50%;
    width:90%;
  }
  .tableHeader{
    font-size:25px;
    color:white;
  }
  .tableRow{
    height: 70px;
    margin:0;
    font-size:25px;
    color:wheat;
  }
  .urlText{
    color:wheat;
  }
  .el-table, .el-table__expanded-cell {
    background-color: transparent;
  }
  .el-table tbody tr:hover>td { 
    background-color:grey!important
  }
  .el-table th, .el-table tr {
    background-color: transparent;
  }
</style>