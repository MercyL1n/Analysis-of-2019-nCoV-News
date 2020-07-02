<template>
  <div class="hotTopics">
    <h2 class="chart-title">疫情热度</h2>
    <el-scrollbar style="height:100%">
    <div class="hotLabel">
      <el-table
      :data="tableData"
      height="690"
      style="width: 100%"
      :header-row-style="{height:'100px'}"
      :row-style="{height:'100px'}"
      header-row-class-name="tableHeader"
      row-class-name="tableRow">
      <el-table-column
        type="index"
        width="60px"
        align="center">
      </el-table-column>
      <el-table-column
        prop="keyword"
        label="关键词"
        width="150px"
        align="center">
      </el-table-column>
      <el-table-column
        prop="url"
        label="链接"
        width="500px"
        align="center"
        >
        <template slot-scope="scope">
          <span class="table-content" >
            <a :href="scope.row.url"
              target="_blank"
              class="urlText">{{scope.row.url}}</a>
            </span>
          </template>
      </el-table-column>
      <el-table-column
        prop="hot_spot_degree"
        label="热度"
        width="130px"
        align="center"
        color="yellow">
      </el-table-column>
      <el-table-column
        prop="confidence"
        label="可信度"
        width="200px"
        align="center"
      >
      </el-table-column>
    </el-table>
    </div>
    </el-scrollbar>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../../assets/scripts/tool/api'
export default {
  data () {
    return {
      tableData: null
    }
  },
  mounted () {
    var that = this
    axios.get(api.hotTopics)
      .then(function (response) {
      console.log(response.data);
      // that.tableData = response.data
     that.tableData = response.data
    })
    .catch(error => {
      console.error(error)
      that.tableData = [{
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'http://www.xinhuanet.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }, {
        keyword: '新冠',
        url: 'https://sohu.com',
        hot_spot_degree: '1518',
        confidence:'80%'
      }]
    })
  },
  }
</script>

<style>
  .hotTopics {
    position: absolute;
    top: 55%;
    left: 170px;
    width: 1050px;
    height: 1200px;
    background: url(../../assets/images/common/tip-title-bg.png) no-repeat top left;
  }
  .hotLabel {
    width: 100%;
    margin-top: 80px;
    height: 1000px;
  }
  .tableHeader{
    font-size:25px;
    color:white;
  }
  .tableRow{
    font-size:25px;
    color:wheat;
  }
  .urlText{
    color:whitesmoke;
  }
  .el-table, .el-table__expanded-cell {
    background-color: transparent;
  }

  .el-table th, .el-table tr {
    background-color: transparent;
  }  
  .el-table__body-wrapper::-webkit-scrollbar{
    /*width: 0;宽度为0隐藏*/
    width: 0px;
  }
  .el-table__body-wrapper::-webkit-scrollbar-thumb{
    border-radius: 2px;
    height: 50px;
    background: #eee;
  }
  .el-table__body-wrapper::-webkit-scrollbar-track{
    overflow-y: hidden;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    background: rgba(0,0,0,0.4);
  }
  .table-content{
    white-space:nowrap; 
    overflow:hidden; 
    text-overflow:ellipsis;
  /*强制不换行，超出部分隐藏且以省略号形式出现*/
  }
</style>