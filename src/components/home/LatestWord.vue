<template>
    <div class="latestWord">
        <div class="hdrightboxtop"><h2 class="chart-title-mid" align="center">疫情速报</h2>
            <div class="left2_table">
               <ul>
                    <li v-for="(item, $index) in list" :key="item.uid" :class="$index %2 == 0 ? null: 'bg'">
                    <p class="fl"><a :href="item.url" class="url" target="_blank">{{item.title}}</a><br>
                    {{item.publish_time}}<br>
                    {{item.content}}             
                    </p>
                    </li>
               </ul>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import api from '../../assets/scripts/tool/api'

export default {
  name: 'latestWord',
  data () {
    return {
      list: null
    }
  },
  mounted () { 
    var that = this
    axios.get(api.lastedwords)
      .then(function (response) {
      that.list = response.data
    })
    .catch(error => {
      console.error(error)
      that.list = [
        {"uid":563,
        "url":"https://news.sina.com.cn/c/2020-06-30/doc-iircuyvk1166445.shtml",
        "hash":"a2341bbf9ec15c745c69506e2fdc9c1b",
        "title":"河大附院此前接触无症状新冠患者的医务人员核酸检测正常",
        "publish_time":"2020-06-30 11:40:00",
        "content":"　　原标题：河大附院此前接触无症状新冠患者的医务人员核酸检测正常，市民可放心前往就医\n　　6月26日，记者获悉，"
        },
        {"uid":563,
        "url":"https://news.sina.com.cn/c/2020-06-30/doc-iircuyvk1166445.shtml",
        "hash":"a2341bbf9ec15c745c69506e2fdc9c1b",
        "title":"河大附院此前接触无症状新冠患者的医务人员核酸检测正常",
        "publish_time":"2020-06-30 11:40:00",
        "content":"　　原标题：河大附院此前接触无症状新冠患者的医务人员核酸检测正常，市民可放心前往就医\n　　6月26日，记者获悉，"
        }
      ]
    })
  },
}
</script>

<style>
  .url{
    color:white;
  }
  .latestWord {
    position: absolute;
    top: 220px;
    left: 39.75%;
    width: 20%;
    height: 84.5%;
  }
  .chart-title-mid {
    position: relative;
    top: 10px;
    font-size: 40px;
    color: #fff;
  }
  .left2_table { 
    width: 90.9%;
    margin-top:2%;
    margin-left: 4.7%;
    font-size: 12px;
    height:93%;
    overflow: scroll;
  }
  .hdrightboxtop {
    background:url(../../assets/images/common/hdbjr.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top center;
    width:100%;
    height: 100%;
  }
  .left2_table::-webkit-scrollbar {
    display:none
  }
  .left2_table li {
    background: rgba(1,202,217,.2) url(../../assets/images/common/icosjx.png) no-repeat  top left;
    position: relative;
    overflow: hidden;
    padding: 2% 0 0 4%;
    color:rgba(255,255,255,.7);
    height: 200px;
    line-height: 278%
  }
  .left2_table li b{
    color:rgba(255,255,255,1);
    font-weight: normal;
  }
  .left2_table li p.fl{
    width: 97%;
    overflow: hidden;
    font-size: 30px;
  }
  .left2_table li p.fr{
    position: absolute;
    font-size: 30px;
    right: 5%;
    top: 7%;
  }

  .left2_table li.bg { 
    background: rgba(0, 179, 255, 0.4) url(../../assets/images/common/icosjx.png) no-repeat  top left;
  }
</style>