<template>
    <div class="hotTopics">
      <h2 class="chart-title">疫情热度</h2>
      <div class="hotLabel">
        <el-table
        :data="tableData"
        :row-style="{height:'100px'}"
        height="650"
        style="width: 100%"
        header-row-class-name="tableHeader"
        row-class-name="tableRow">
        <el-table-column
          type="index"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="keyword"
          label="关键词"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="url"
          label="链接"
          width="450"
          align="center">
          <template slot-scope="scope">
              <a :href="scope.row.url"
                target="_blank"
                class="urlText">{{scope.row.url}}</a>
            </template>
        </el-table-column>
        <el-table-column
          prop="hot"
          label="热度"
          width="200"
          align="center"
          color="yellow">
        </el-table-column>
      </el-table>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
      return {
        tableData: [{
          keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }, {
         keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }, {
          keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }, {
          keyword: '新冠',
          url: 'http://www.xinhuanet.com',
          hot: '1518'
        }, {
          keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }, {
          keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }, {
          keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }, {
          keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }, {
          keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }, {
          keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }, {
          keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }, {
          keyword: '新冠',
          url: 'https://sohu.com',
          hot: '1518'
        }]
      }
    }
    }
  </script>

<style>
  .hotTopics {
    position: absolute;
    top: 55%;
    left: 170px;
    width: 1050px;
    height: 1000px;
    background: url(../../assets/images/common/tip-title-bg.png) no-repeat top left;
  }
  .hotLabel {
    width: 100%;
    margin-top: 80px;
    height: 100%;
  }
  .tableHeader{
    font-size:25px;
    color:white;
    background-color:rgba(240, 248, 255, 0.7)
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

</style>