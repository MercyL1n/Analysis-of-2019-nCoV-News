<template>
  <div class="Home">
    <TopSide :title="leftTitle"></TopSide>
    <TopMid :title="midTitle"></TopMid>
    <div class="left">
      <clusteringOfTopics></clusteringOfTopics>
      <hotTopics></hotTopics>
    </div>
    <div class="right">
      <wordCloud></wordCloud>
      <websiteList></websiteList>
    </div>
  </div>
</template>
<script>
import TopSide from '../common/TopSide'
import TopMid from '../common/TopMid'
import ClusteringOfTopics from './ClusteringOfTopics'
import HotTopics from './HotTopics'
import WordCloud from './WordCloud'
import WebsiteList from './WebsiteList'

export default {
  name: 'Home',
  data () {
    return {
      leftTitle: 'SCSS',
      midTitle: '疫情新闻采集分析系统'
    }
  },
  components: {
    TopSide,
    TopMid,
    ClusteringOfTopics,
    HotTopics,
    WordCloud,
    WebsiteList
  }
}
</script>
<style scoped>
</style>
