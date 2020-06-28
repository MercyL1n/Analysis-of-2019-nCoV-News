<template>
  <div class="left">
    <div class="clusteringOfTopics">
      <h2 class="chart-title">疫情话题聚类</h2>
    </div>
    <div class="hotTopics">
      <h2 class="chart-title">疫情热点</h2>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import api from '../../../assets/scripts/tool/api'
  import Data from '../../../data/fantasy/castle/left'
  import clusteringOfTopics from './clusteringOfTopics'
  import MultiPie from '../../../assets/scripts/charts/multiPie'
  Data()
  export default {
    name: 'left',
    data () {
      return {
        thisyear: '',
        hbstate: '',
        huanbi: '',
        lastyear: ''
      }
    },
    // mounted () {
    //   const self = this
    //   axios.get(api.iotalarm)
    //     .then(response => {
    //       const data = response.data.result
    //       self.dealDDC(data.clusteringOfTopics)
    //       self.dealCase(data.hotTopics)
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     })
    // },
    // methods: {
    //   dealDDC (data) {
    //     let hbstate
    //     let hbValue = data.huanbi
    //     if (hbValue < 0) {
    //       hbstate = 'down'
    //       hbValue = Math.abs(hbValue)
    //     } else if (hbValue === 0) {
    //       hbstate = 'level'
    //       hbValue = '- 0'
    //     } else if (hbValue > 0) {
    //       hbstate = 'up'
    //       hbValue = Math.abs(hbValue)
    //     }
    //     this.thisyear = data.thisyear
    //     this.hbstate = hbstate
    //     this.huanbi = hbValue
    //     this.lastyear = data.lastyear
    //   },
    //   dealCase (data) {
    //     const config = {}
    //     const multiPie = new MultiPie('.case-resolved-chart', config)
    //     multiPie.render(data)
    //   }
    // }
  }
</script>
<style scoped>
  .clusteringOfTopics {
    position: absolute;
    top: 220px;
    left: 60px;
    width: 680px;
    height: 600px;
    background: url(../../../assets/images/common/tip-title-bg.png) no-repeat top left;
  }

  .hotTopics {
    position: absolute;
    top: 50%;
    left: 60px;
    width: 680px;
    height: 600px;
    background: url(../../../assets/images/common/tip-title-bg.png) no-repeat top left;
  }
</style>
