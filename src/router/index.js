/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2017-12-27 11:24:06
 * @Last Modified time: 2017-12-27 11:24:06
 * @Description: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/components/home/Home'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [{
      path: 'home',
      component: Home
    }]
  }]
})
