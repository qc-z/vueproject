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
//引入mui样式
import './static/vendor/mui/dist/css/mui.css';
//自己的全局样式
import './static/css/global.css'
//Axios：引入axios
import Axios from 'axios';
//挂载原型
Vue.prototype.$ajax = Axios
Axios.defaults.baseURL = 'http://test.legle.cc/';
Axios.defaults.withCredentials = true

//引入全局组件需要的组件对象 开始
import NavBar from './components/common/navBar.vue';
import Upload from './components/common/Upload.vue';
//moment
import Moment from 'moment'
//定义全局过滤器
Vue.filter('convertDate',function(value){
    return Moment(value).format('YYYY-MM-DD');
});
Vue.component('navBar',NavBar); //使用最好以nav-bar
Vue.component('upload',Upload); //使用最好以upload

//引入自己的vue文件
import App from './app.vue'
import Home from './components/home/home.vue'
import Member from './components/member/member.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import Search from './components/search/search.vue';
import NewsList from './components/news/newsList.vue';
import NewDetail from './components/news/newsDetail.vue';

//路由规则
let router = new VueRouter({
	linkActiveClass:'mui-active',
	routes:[
	//vuerouter配置路由规则
		{path:'/',redirect:{name:'home'}},//重定向
		{ name: 'home', path: '/home', component: Home },//首页
        { name:'member',path:'/member',component: Member}, //会员
        { name: 'shopcart',path:'/shopcart',component:Shopcart}, //购物车
        { name: 'search',path:'/search',component:Search}, //查找
        { name:'news.list',path:'/news/list',component:NewsList}, //手术列表
        { name:'news.detail',path:'/news/detail',component:NewDetail}, //手术详情

	]
})
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})