'use strict';
//引入第三方包
import Vue from 'vue';
//引入路由组件
import VueRouter from 'vue-router';
//安装插件
Vue.use(VueRouter);
//引入mint-ui
// import Mint from 'mint-ui';
//Mint:引入mint-ui css
import 'mint-ui/lib/style.css';
//Mint-ui安装插件
// Vue.use(Mint);
// // mint-ui 按需引入 开始
import Header from 'mint-ui/lib/header';
import Switch from 'mint-ui/lib/switch';
import Swipe from 'mint-ui/lib/swipe';
import SwipeItem from 'mint-ui/lib/swipe-item';
import Lazyload from 'mint-ui/lib/lazyload';
import Loadmore from 'mint-ui/lib/loadmore';
import Indicator from 'mint-ui/lib/indicator';
import Button from 'mint-ui/lib/button';
Vue.component(Header.name, Header);
Vue.component(Switch.name, Switch);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Button.name, Button);
Vue.use(Lazyload);
//引入mui样式
import './static/vendor/mui/dist/css/mui.css';
//自己的全局样式
import './static/css/global.css'
//Axios：引入axios
import Axios from 'axios';

//挂载原型
Vue.prototype.$ajax = Axios
Axios.defaults.baseURL = 'http://test.legle.cc/';
//自己封装的ajax
import ajax from './components/config/selfAjax.js';
Vue.prototype.ajax = ajax;
Vue.prototype.baseUrl = 'http://test.legle.cc/';
Axios.defaults.withCredentials = true
Axios.interceptors.request.use(function(config){
    //显示图标
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    return config;
});
Axios.interceptors.response.use(function(config){
    //隐藏图标
    Indicator.close();
    //获取到config中的data，进行加工
    return config;
});
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
const Home = r => require(['./components/home/home.vue'],r);
const Member = r => require(['./components/member/member.vue'],r);
const Shopcart = r => require(['./components/shopcart/shopcart.vue'],r);
const Search = r => require(['./components/search/search.vue'],r);
const NewsList = r => require(['./components/news/newsList.vue'],r);
const NewsDetail = r => require(['./components/news/newsDetail.vue'],r);

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
        { name:'news.detail',path:'/news/detail',component:NewsDetail}, //手术详情

	]
})
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})