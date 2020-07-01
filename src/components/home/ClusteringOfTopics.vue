<template>
    <div class="clusteringOfTopics">
      <h2 class="chart-title">疫情话题聚类</h2>
      <img class='cluster' :src='pic_url' />
    </div>
</template>

<script>
import axios from 'axios'
import api from '../../assets/scripts/tool/api'

export default {
  name: 'clusteringOfTopics',
  data () {
    return {
      pic_url: "/api"+api.clusteringOfTopics
    }
  },
}
</script>

<style>
  .clusteringOfTopics {
    position: absolute;
    top: 220px;
    left: 170px;
    width: 35%;
    height: 35%;
    background: url(../../assets/images/common/tip-title-bg.png) no-repeat top left;
  }
  .cluster {
    width: 90%;
    margin-top: 80px;
    height: 100%;
    background-color:rgba(240, 248, 255, 0.7)
  }
</style>