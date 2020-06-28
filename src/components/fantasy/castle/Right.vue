<template>
  <div class="right">
    <div class="wordCloud">
      <h2 class="chart-title">词云图</h2>
    </div>
    <div class="websiteList">
      <h2 class="chart-title">网站列表</h2>
    </div>
  </div>
</template>
<script>
  import * as d3 from 'd3'
  import axios from 'axios'
  import WaterBall from '../../../assets/scripts/charts/waterBall'
  import api from '../../../assets/scripts/tool/api'
  import Data from '../../../data/fantasy/castle/bandTop'
  Data()
  export default {
    name: 'right',
    data () {
      return {
        male: 0,
        websiteList: []
      }
    },
    mounted () {
      const self = this
      axios.get(api.iottop5)
        .then(response => {
          const data = response.data.result
          self.dealDDC(data.sex)
          self.dealwebsiteList(data.websiteList)
        })
        .catch(error => {
          console.error(error)
        })
    },
    methods: {
      dealDDC (data) {
        this.male = data.male
        const config = {}
        const waterBall = new WaterBall('#sexChart', config)
        waterBall.drawCharts(data)
      },
      dealwebsiteList (data) {
        const color = ['#ffd43d', '#efefef', '#eb8711', '#14c7fb', '#14c7fb']
        const max = d3.max(data, d => {
          return d.value
        })
        data.map((item, i) => {
          this.websiteList.push({
            barWidth: `${item.value * 100 / max}%`,
            value: parseInt(item.value, 10),
            color: color[i],
            name: item.name
          })
        })
      }
    }
  }
</script>
<style scoped>
  .wordCloud {
    position: absolute;
    top: 220px;
    right: 70px;
    width: 540px;
    height: 516px;
    background: url(../../../assets/images/common/tip-title-bg.png) no-repeat top left;
  }

  .websiteList {
    position: absolute;
    top: 50%;
    right: 70px;
    width: 540px;
    height: 690px;
    background: url(../../../assets/images/common/tip-title-bg.png) no-repeat top left;
  }

</style>
