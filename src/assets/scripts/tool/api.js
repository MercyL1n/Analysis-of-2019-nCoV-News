/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2017-12-19 11:15:15
 * @Last Modified time:   2017-12-19 11:15:15
 * @Description: API地址配置
 */
// const onlineApiHost = 'http://122.51.141.127:8888/'
var isOnline = false
const onlineWsHost = isOnline ? 'http://122.51.141.127:8888/' : '/api/'
export default {
  websiteList: onlineWsHost+'websites/list',
  wordCloud: onlineWsHost+'res/wordcloud',
  clusteringOfTopics: onlineWsHost+'res/cluster',
  hotTopics: onlineWsHost+'statresult/list',
  lastedwords: onlineWsHost + "textstorage/top/10"
}
