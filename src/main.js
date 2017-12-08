'use strict';
//引入第三方包
import Vue from 'vue';
//引入路由组件
import VueRouter from 'vue-router';
//安装插件
Vue.use(VueRouter);
//引入mint-ui
import Mint from 'mint-ui';
//Mint:引入mint-ui css
import 'mint-ui/lib/style.css';
//Mint-ui安装插件
Vue.use(Mint);
//引入mui
//Axios：引入axios
import Axios from 'axios';
//挂载原型
Vue.prototype.$ajax = Axios
Axios.defaults.baseURL = 'http://test.legle.cc/';
Axios.defaults.withCredentials = true

//引入自己的vue文件
import App from './app.vue'
import Home from './components/home/home.vue'


//路由规则
let router = new VueRouter({
	routers:[
	//vuerouter配置路由规则
		{path:'/',redirect:{name:'home'}},//重定向
		{name:'home',path:'/home',component:Home}
	]
})
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})