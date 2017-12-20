/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
// let baseUrl = ''; 
// let routerMode = 'history';
// let baseImgPath = 'http://test.legle.cc:82';

// if (process.env.NODE_ENV == 'development') {
// 	baseUrl = 'http://test.legle.cc:82';
// }else{
// 	baseUrl = 'http://test.legle.cc:82';
// }

let baseUrl = 'http://test.legle.cc/'; 
let routerMode = 'history';
let baseImgPath = 'http://azz.leglear.com/';



export {
	baseUrl,
	routerMode,
	baseImgPath
}