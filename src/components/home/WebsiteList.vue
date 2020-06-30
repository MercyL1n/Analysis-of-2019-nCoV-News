<template>
    <div class="websiteList">
      <h2 class="chart-title">网站列表
        <el-button  style="margin-left: 665px;fixed:right" size="large" type="success"  @click="add">增加</el-button>
      </h2>
    <div class="websiteLabel">
      <el-table
        :data="list"
        style="width: 100%"
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
          align="center">
          <template slot-scope="scope">
            <a :href="scope.row.url"
              target="_blank"
              class="urlText">{{scope.row.url}}</a>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button type="danger" size="large" @click="remove(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--弹窗-->
    <el-dialog :title="dialogTitle" width="50%" :visible.sync="iconFormVisible">
      <el-form :inline="true" :model="input" class="demo-form-inline">
        <el-form-item label="名称">
          <el-input v-model="input.name" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="input.url" placeholder="链接"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="iconFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUser()">确 定</el-button>
      </div>
    </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      iconFormVisible: false,
      input: {},
      dialogTitle: '增加',
      rowIndex: null,
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
      ],
    }
  },created() {
  },
  methods: {
    // 增加
    add() {
      this.dialogTitle = '增加';
      this.input = {};
      this.iconFormVisible = true;
    },
    // 弹窗确定
    submitUser() {
      this.list.splice(0, 0, this.input);
      this.iconFormVisible = false;
    },
    // 删除
    remove(index, row) {
      this.$confirm(`确定删除${row.name}吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error',
      }).then(() => {
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
</style>