<template>
    <div class="websiteList">
      <h2 class="chart-title">网站列表
        <el-button  style="margin-left: 655px;fixed:right; font-size: 23px" size="large" type="success"  @click="add" >增加</el-button>
      </h2>
    <div class="websiteLabel">
      <el-table
        :data="list"
        style="width: 100%; font-size: 40px!important"
        width="1300"
        height="690"
        :header-row-style="{height:'100px'}"
        :row-style="{height:'100px'}"
        header-row-class-name="tableHeader"
        row-class-name="tableRow">
        <el-table-column
          prop="name"
          label="名称"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="url"
          label="链接"
          width="600"
          align="center"
          >
          <template slot-scope="scope">
            <span class="table-content" >
            <a :href="'https://'+scope.row.start_url"
              target="_blank"
              class="urlText">{{scope.row.start_url}}</a>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button type="danger" size="large" @click="remove(scope.$index, scope.row)" style="font-size: 23px">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--弹窗-->
    <el-dialog :title="dialogTitle" width="30%" height="20%" :visible.sync="iconFormVisible" >
      <el-form :inline="true" :model="input" class="demo-form-inline" >
        <el-form-item label="名称">
          <el-input v-model="input.name" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="input.start_url" placeholder="链接"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" >
        <el-button @click="iconFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUser()">确 定</el-button>
      </div>
    </el-dialog>
    </div>
</template>

<script>
import axios from 'axios'
import api from '../../assets/scripts/tool/api'
const Base64 = require('js-base64').Base64

export default {
  data () {
    return {
      iconFormVisible: false,
      input: {},
      dialogTitle: '增加',
      rowIndex: null,
      list: null
    }
  },created() {
  },
  mounted () { 
    var that = this
    axios.get(api.websiteList)
      .then(function (response) {
      // console.log(response.data);
      that.list = response.data
    })
    .catch(error => {
      console.error(error)
      that.list = [
      {uid: 1, name: '网易新闻', start_url: 'https://news.163.com/'},
      {uid: 1, name: '新浪新闻', start_url: 'https://news.sina.com.cn/'},
      {uid: 1, name: '环球网', start_url: 'https://www.huanqiu.com/'},
      {uid: 1, name: '新华网', start_url: 'http://www.xinhuanet.com/'},
      {uid: 1, name: '凤凰网', start_url: 'http://www.ifeng.com/'},
      {uid: 1, name: '网易新闻', start_url: 'https://news.163.com/'},
      {uid: 1, name: '新浪新闻', start_url: 'https://news.sina.com.cn/'},
      {uid: 1, name: '环球网', start_url: 'https://www.huanqiu.com/'},
      {uid: 1, name: '新华网', start_url: 'http://www.xinhuanet.com/'},
      {uid: 1, name: '凤凰网', start_url: 'http://www.ifeng.com/'},
      {uid: 1, name: '环球网', start_url: 'https://www.huanqiu.com/'},
      {uid: 1, name: '新华网', start_url: 'http://www.xinhuanet.com/'},
      {uid: 1, name: '凤凰网', start_url: 'http://www.ifeng.com/'}
      ]
    })
  },
  methods: {
    // 增加
    add () {
      this.dialogTitle = '请求网站管理员增加站点';
      this.input = {};
      this.iconFormVisible = true;
    },
    // 弹窗确定
    submitUser () {
      this.list.splice(0, 0, this.input);
      this.input.name
      // console.log(api.addWebsite + Base64.encode(this.input.start_url) + "/" + this.input.name)
      axios.get(api.addWebsite + Base64.encode(this.input.start_url) + "/" + this.input.name)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(error => {
      console.error(error)
      })
      this.iconFormVisible = false;
    },
    // 删除
    remove (index, row) {
      this.$confirm(`确定请求网站管理员删除${row.name}吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error',
      }).then(() => {
        // console.log(api.deleteWebsite + Base64.encode(this.list[index].start_url) + "/" + this.list[index].name)
        axios.get(api.deleteWebsite + Base64.encode(this.list[index].start_url) + "/" + this.list[index].name)
        .then(function (response) {
          console.log(response.data)
        })
        .catch(error => {
        console.error(error)
        })
        this.list.splice(index, 1);
      });
    },
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
  .el-table__row {
    height: 100px;
    font-size: 40px!important;
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
    background-color: transparent!important;
  }
  .el-table tbody tr:hover>td { 
    background-color:grey!important
  }
  .el-table th, .el-table tr {
    background-color: transparent!important;
  }
  .el-dialog__title {
    font-size: 30px!important;
  }
  .el-form-item__label {
     font-size: 25px!important;
  }
  .el-form-item__content {
     font-size: 25px!important;
  }
  .el-input__inner {
     font-size: 23px!important;
  }
  .el-message-box__title {
    padding-left: 0;
    margin-bottom: 0;
    font-size: 30px!important;
    line-height: 1;
    color: #303133;
}
  .el-message-box__container {
      position: relative;
      font-size: 25px!important;
  }
  .table-content{
      white-space:nowrap; 
      overflow:hidden; 
      text-overflow:ellipsis;
    /*强制不换行，超出部分隐藏且以省略号形式出现*/
  }
  .el-table .cell {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: initial!important;
    padding-right: 10px;
}
</style>