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
  data () {
    return {
      chart: null,
      chartdata: {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "wordCloud",
            "shape": "circle",
            "rotationRange": [
                -90,
                90
            ],
            "rotationStep": 45,
            "girdSize": 5,
            "sizeRange": [
                20,
                100
            ],
            "data": [
                {
                    "name": "\u75ab\u60c5",
                    "value": "350467",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(31,109,73)"
                        }
                    }
                },
                {
                    "name": "\u4f01\u4e1a",
                    "value": "155620",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(100,88,93)"
                        }
                    }
                },
                {
                    "name": "\u9632\u63a7",
                    "value": "115849",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(53,10,1)"
                        }
                    }
                },
                {
                    "name": "\u80ba\u708e",
                    "value": "115419",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(49,4,12)"
                        }
                    }
                },
                {
                    "name": "\u4e2d\u56fd",
                    "value": "97053",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(89,43,119)"
                        }
                    }
                },
                {
                    "name": "\u5de5\u4f5c",
                    "value": "81735",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(77,105,19)"
                        }
                    }
                },
                {
                    "name": "\u5f71\u54cd",
                    "value": "80715",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(20,14,33)"
                        }
                    }
                },
                {
                    "name": "\u65b0\u51a0",
                    "value": "76457",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(115,60,8)"
                        }
                    }
                },
                {
                    "name": "\u5e02\u573a",
                    "value": "68240",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(134,16,56)"
                        }
                    }
                },
                {
                    "name": "\u51a0\u72b6\u75c5\u6bd2",
                    "value": "65439",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(152,135,33)"
                        }
                    }
                },
                {
                    "name": "\u590d\u5de5",
                    "value": "64799",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(53,3,63)"
                        }
                    }
                },
                {
                    "name": "\u6b66\u6c49",
                    "value": "64521",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(123,11,105)"
                        }
                    }
                },
                {
                    "name": "\u65b0\u578b",
                    "value": "64155",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(141,143,2)"
                        }
                    }
                },
                {
                    "name": "\u8868\u793a",
                    "value": "63196",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(134,93,121)"
                        }
                    }
                },
                {
                    "name": "\u516c\u53f8",
                    "value": "62871",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(112,132,143)"
                        }
                    }
                },
                {
                    "name": "\u7ecf\u6d4e",
                    "value": "62110",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(129,21,160)"
                        }
                    }
                },
                {
                    "name": "\u53e3\u7f69",
                    "value": "60526",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(87,131,159)"
                        }
                    }
                },
                {
                    "name": "\u75c5\u4f8b",
                    "value": "59993",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(132,97,79)"
                        }
                    }
                },
                {
                    "name": "\u76ee\u524d",
                    "value": "59675",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(13,51,49)"
                        }
                    }
                },
                {
                    "name": "\u8bb0\u8005",
                    "value": "54159",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(67,19,42)"
                        }
                    }
                },
                {
                    "name": "\u533b\u9662",
                    "value": "54019",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(21,106,123)"
                        }
                    }
                },
                {
                    "name": "\u786e\u8bca",
                    "value": "52399",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(89,8,60)"
                        }
                    }
                },
                {
                    "name": "\u8fdb\u884c",
                    "value": "50201",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(65,132,99)"
                        }
                    }
                },
                {
                    "name": "\u8d23\u4efb\u7f16\u8f91",
                    "value": "48726",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(10,88,5)"
                        }
                    }
                },
                {
                    "name": "\u751f\u4ea7",
                    "value": "48149",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(49,147,69)"
                        }
                    }
                },
                {
                    "name": "\u60c5\u51b5",
                    "value": "48085",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(2,122,154)"
                        }
                    }
                },
                {
                    "name": "\u652f\u6301",
                    "value": "45648",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(33,2,106)"
                        }
                    }
                },
                {
                    "name": "\u76f8\u5173",
                    "value": "45373",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(135,98,105)"
                        }
                    }
                },
                {
                    "name": "\u56fd\u5bb6",
                    "value": "44909",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(126,90,132)"
                        }
                    }
                },
                {
                    "name": "\u611f\u67d3",
                    "value": "44454",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(60,156,156)"
                        }
                    }
                },
                {
                    "name": "\u75c5\u6bd2",
                    "value": "44220",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(34,112,90)"
                        }
                    }
                },
                {
                    "name": "\u670d\u52a1",
                    "value": "44050",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(78,113,67)"
                        }
                    }
                },
                {
                    "name": "\u4eba\u5458",
                    "value": "42696",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(34,133,126)"
                        }
                    }
                },
                {
                    "name": "\u53ef\u80fd",
                    "value": "42535",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(83,141,146)"
                        }
                    }
                },
                {
                    "name": "\u60a3\u8005",
                    "value": "42027",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(125,140,95)"
                        }
                    }
                },
                {
                    "name": "\u53d1\u5c55",
                    "value": "42025",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(54,15,62)"
                        }
                    }
                },
                {
                    "name": "\u6ca1\u6709",
                    "value": "41992",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(86,32,141)"
                        }
                    }
                },
                {
                    "name": "\u5df2\u7ecf",
                    "value": "41932",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(158,28,122)"
                        }
                    }
                },
                {
                    "name": "\u653f\u7b56",
                    "value": "41327",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(16,120,83)"
                        }
                    }
                },
                {
                    "name": "\u6807\u9898",
                    "value": "40610",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(107,95,57)"
                        }
                    }
                },
                {
                    "name": "\u7269\u8d44",
                    "value": "40570",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(43,64,137)"
                        }
                    }
                },
                {
                    "name": "\u4e00\u4e2a",
                    "value": "40370",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(83,74,126)"
                        }
                    }
                },
                {
                    "name": "\u63aa\u65bd",
                    "value": "39771",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(150,76,114)"
                        }
                    }
                },
                {
                    "name": "\u65f6\u95f4",
                    "value": "39494",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(35,20,65)"
                        }
                    }
                },
                {
                    "name": "\u63d0\u4f9b",
                    "value": "39399",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(142,24,156)"
                        }
                    }
                },
                {
                    "name": "\u4fdd\u969c",
                    "value": "38183",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(152,80,115)"
                        }
                    }
                },
                {
                    "name": "\u533b\u7597",
                    "value": "37015",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(56,113,145)"
                        }
                    }
                },
                {
                    "name": "\u51fa\u73b0",
                    "value": "36764",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(84,83,111)"
                        }
                    }
                },
                {
                    "name": "\u95ee\u9898",
                    "value": "36457",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(29,37,98)"
                        }
                    }
                },
                {
                    "name": "\u9700\u8981",
                    "value": "36440",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(44,129,26)"
                        }
                    }
                },
                {
                    "name": "\u884c\u4e1a",
                    "value": "36206",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(3,23,122)"
                        }
                    }
                },
                {
                    "name": "\u7f8e\u56fd",
                    "value": "35406",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(104,30,91)"
                        }
                    }
                },
                {
                    "name": "\u4ebf\u5143",
                    "value": "35204",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(65,52,146)"
                        }
                    }
                },
                {
                    "name": "\u8fdb\u5165",
                    "value": "34919",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(35,65,45)"
                        }
                    }
                },
                {
                    "name": "\u5168\u7403",
                    "value": "34816",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(9,95,95)"
                        }
                    }
                },
                {
                    "name": "\u9700\u6c42",
                    "value": "33930",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(96,67,80)"
                        }
                    }
                },
                {
                    "name": "\u671f\u95f4",
                    "value": "33752",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(124,80,96)"
                        }
                    }
                },
                {
                    "name": "2020",
                    "value": "33688",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(22,154,135)"
                        }
                    }
                },
                {
                    "name": "10",
                    "value": "33235",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(74,137,65)"
                        }
                    }
                },
                {
                    "name": "\u8981\u6c42",
                    "value": "32808",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(107,5,83)"
                        }
                    }
                },
                {
                    "name": "\u98ce\u9669",
                    "value": "32111",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(142,121,112)"
                        }
                    }
                },
                {
                    "name": "\u8d44\u91d1",
                    "value": "31514",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(156,132,111)"
                        }
                    }
                },
                {
                    "name": "\u9694\u79bb",
                    "value": "31370",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(5,55,111)"
                        }
                    }
                },
                {
                    "name": "\u5168\u56fd",
                    "value": "30879",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(115,31,96)"
                        }
                    }
                },
                {
                    "name": "\u6570\u636e",
                    "value": "29378",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(134,113,74)"
                        }
                    }
                },
                {
                    "name": "\u6e56\u5317",
                    "value": "29214",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(64,148,81)"
                        }
                    }
                },
                {
                    "name": "\u4e3b\u8981",
                    "value": "29039",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(45,56,128)"
                        }
                    }
                },
                {
                    "name": "\u9632\u75ab",
                    "value": "27903",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(69,82,77)"
                        }
                    }
                },
                {
                    "name": "\u6295\u8d44",
                    "value": "27800",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(87,129,114)"
                        }
                    }
                },
                {
                    "name": "\u5730\u533a",
                    "value": "27512",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(56,128,4)"
                        }
                    }
                },
                {
                    "name": "\u505a\u597d",
                    "value": "27356",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(1,103,148)"
                        }
                    }
                },
                {
                    "name": "\u589e\u957f",
                    "value": "27353",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(134,96,152)"
                        }
                    }
                },
                {
                    "name": "2019",
                    "value": "27211",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(153,111,70)"
                        }
                    }
                },
                {
                    "name": "\u53d1\u5e03",
                    "value": "26983",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(149,61,113)"
                        }
                    }
                },
                {
                    "name": "\u5458\u5de5",
                    "value": "26892",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(50,136,49)"
                        }
                    }
                },
                {
                    "name": "\u4fe1\u606f",
                    "value": "26818",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(106,6,69)"
                        }
                    }
                },
                {
                    "name": "\u5065\u5eb7",
                    "value": "26680",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(72,58,62)"
                        }
                    }
                },
                {
                    "name": "\u8d37\u6b3e",
                    "value": "26490",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(30,34,12)"
                        }
                    }
                },
                {
                    "name": "\u653f\u5e9c",
                    "value": "25996",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(95,41,3)"
                        }
                    }
                },
                {
                    "name": "\u590d\u4ea7",
                    "value": "25641",
                    "textStyle": {
                        "normal": {
                            "color": "rgb(98,29,139)"
                        }
                    }
                }
            ],
            "width": "2000",
            "height": "2000",
            "drawOutOfBound": true,
            "textStyle": {
                "emphasis": {
                    "shadowColor": "red"
                }
            }
        }
    ],
    "legend": [
        {
            "data": [],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    }
    }
    }
  },
  mounted () {
    axios.get(api.wordCloud)
        .then(response => {
        const data = response.data.result
        this.chartdata = data
        })
        .catch(error => {
        console.error(error)
        })
    this.initChart()
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