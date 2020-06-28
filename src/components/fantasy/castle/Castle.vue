<template>
  <div class="castle">
    <TopSide :title="leftTitle"></TopSide>
    <TopMid :title="midTitle"></TopMid>
    <Left></Left>
    <Right></Right>
    <MapHeat></MapHeat>
    <Foot></Foot>
  </div>
</template>
<script>
import TopSide from '../../common/TopSide'
import TopMid from '../../common/TopMid'
import Left from './Left'
import Right from './Right'
import Foot from './Foot'
import MapHeat from './MapHeat'
export default {
  name: 'Castle',
  data () {
    return {
      leftTitle: 'SCSS',
      midTitle: '疫情新闻采集分析系统'
    }
  },
  components: {
    TopSide,
    TopMid,
    Left,
    Right,
    // Foot,
    // MapHeat
  }
}
</script>
<style scoped>
</style>
