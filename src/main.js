// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

//1.创建组件

import Goods from './components/goods/Goods.vue';
import New from './components/New.vue';
import Show from './components/Show.vue';
import Content from './components/Content.vue';

//2.配置路由
const routes = [
	{path:'/goods',component:Goods},
	{path:'/new',component:New},
	{path:'/show',component:Show},
	{path:'/content/:aid',component:Content},
	{path:'*',redirect:'/goods'}  /*默认跳转路由*/ 
]

//3.实例化
const router = new VueRouter({
	routes
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
