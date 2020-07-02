<template>
  <div class="Home">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    <TopSide :title="leftTitle"></TopSide>
    <TopMid :title="midTitle"></TopMid>
    <div class="left">
      <clusteringOfTopics></clusteringOfTopics>
      <hotTopics></hotTopics>
    </div>
    <lastedWord></lastedWord>
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
import LastedWord from './LatestWord'

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
    WebsiteList,
    LastedWord
  }
}
</script>
<style scoped>
</style>
