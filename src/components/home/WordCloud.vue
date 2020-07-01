<template>
    <div class="wordCloud">
      <h2 class="chart-title">词云图</h2>
        <div class='cloud' :id="id"/>
    </div>
</template>

<script>
/* eslint-disable */
import echarts from 'echarts'
import axios from 'axios'
import api from '../../assets/scripts/tool/api'
import 'echarts-wordcloud/dist/echarts-wordcloud'
import 'echarts-wordcloud/dist/echarts-wordcloud.min'

export default {
  props: {
    id: {
      type: String,
      default: 'chart'
    },
    title: {
      type: String,
      default: ''
    }
  },
  mounted () {
    var that = this
    axios.get(api.wordCloud)
      .then(response => {
      console.log(response)
      const data = response.data
      that.chartdata = data
      this.initChart()
      // console.log(this.chartdata)
      })
      .catch(error => {
      console.error(error)
      })
  },
  data () {
    return {
      chart: null,
      chartdata: null
    }
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(document.getElementById(this.id))
      const option = this.chartdata
      this.chart.setOption(option)
    }
  }
}
</script>
<style scoped>
  .wordCloud {
    position: absolute;
    top: 220px;
    right: 70px;
    width: 35%;
    height: 35%;
    background: url(../../assets/images/common/tip-title-bg.png) no-repeat top left;
  }
  .cloud {
    width: 90%;
    top: 80px;
    height: 100%;
    background-color:rgba(240, 248, 255, 0.7)
  }
</style>